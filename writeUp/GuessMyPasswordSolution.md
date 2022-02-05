# GuessMyPassword

## Solution :

To validate this challenge, the user needs to find the good password.

To do that, he needs to read the code and find that the `password` variable has his value writing in the code.

And after that, he needs to call the `guessMyPassword()` function with this password.

```sol
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
```