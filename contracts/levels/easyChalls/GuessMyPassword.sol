// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract GuessMyPassword {
    bytes32 password = "M0t2p4S5Etr35s3CUr153";
    bool public claim;

    constructor() public {
        claim = false;
    }

    function guessMyPassword(bytes32 _password) public {
        require(tx.origin != msg.sender);
        require(_password == password, "Bad Password");
        claim = true;
    }
}