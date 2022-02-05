// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract GuessMyRandomPassword {
    bool public claim;

    constructor() public {
        claim = false;
    }

    function guessMyRandomPassword(bytes32 _password) public {
        bytes32 myCryptedRandomPassword = keccak256(abi.encodePacked(blockhash(block.number - 1), now));
        require(keccak256(abi.encodePacked(_password, now)) == myCryptedRandomPassword, "Bad Password");
        claim = true;
    }
}