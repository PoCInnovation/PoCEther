// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract BecomeTheOwner {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function becomeTheOwner() public {
        if (tx.origin == msg.sender) {
            owner = msg.sender;
        }
    }
}