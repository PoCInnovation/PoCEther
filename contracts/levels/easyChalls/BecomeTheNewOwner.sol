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