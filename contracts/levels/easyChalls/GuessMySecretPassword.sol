// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract GuessMySecretPassword {
    bytes32 cryptedPassword = 0x6159fad6d99bd85e4d3d3c55cbda4e3669806973f04c91687eca42afbcfae1c4;
    bool public claim;

    constructor() public {
        claim = false;
    }

    function guessMySecretPassword(uint16 _password) public {
        if (keccak256(abi.encodePacked(_password)) == cryptedPassword)
            claim = true;
    }
}