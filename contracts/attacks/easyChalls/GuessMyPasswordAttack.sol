// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/easyChalls/GuessMyPassword.sol";

contract attackGuessMyPassword {
    GuessMyPassword originalContract;
    bytes32 password = "M0t2p4S5Etr35s3CUr153";

    constructor(address _originalContract) public {
        originalContract = GuessMyPassword(_originalContract);
    }

    function exploit() public {
        originalContract.guessMyPassword(password);
    }
}