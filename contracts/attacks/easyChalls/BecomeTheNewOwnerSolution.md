# BecomeTheNewOwner

## Solution :

To validate this challenge, the user needs to become the owner of the contract.

To do that, he needs to call the `becomeTheOwner()` function with a contract.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract BecomeTheNewOwner {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function becomeTheNewOwner() public {
        if (tx.origin != msg.sender) {
            owner = tx.origin;
        }
    }
}
```