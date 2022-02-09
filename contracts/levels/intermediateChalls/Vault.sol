// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

interface BankSecurity {
	function isGoodPassword(uint) external returns (bool);
}

contract Vault {
	bool public open;
	uint private password;

	constructor() public {
		open = false;
	}

	function unlockVault(uint _password) public {
		BankSecurity bank = BankSecurity(msg.sender);

		if (!bank.isGoodPassword(_password)) {
			password = _password;
			open = bank.isGoodPassword(_password);
		}
	}
}