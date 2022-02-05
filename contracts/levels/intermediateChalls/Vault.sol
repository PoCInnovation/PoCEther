// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

interface Bank {
	function isGoodPassword(uint) external returns (bool);
}

contract Vault {
	bool public open;
	uint private password;

	constructor() public {
		open = false;
	}

	function unlockVault(uint _password) public {
		Bank bank = Bank(msg.sender);

		if (!bank.isGoodPassword(_password)) {
			password = _password;
			open = bank.isGoodPassword(_password);
		}
	}
}