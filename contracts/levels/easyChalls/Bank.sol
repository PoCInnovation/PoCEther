// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Bank {
	mapping(address => uint256) public balanceOf;

	constructor() public payable {}

	function getBalance() public view returns (uint256) {
		return (balanceOf[tx.origin]);
	}

	function deposit() public payable {
		require(tx.origin != msg.sender, "Bad sender");
		balanceOf[tx.origin] += msg.value;
	}

	function withdraw(uint256 value) public {
		require((tx.origin != msg.sender) && (balanceOf[tx.origin] > 0), "Bad sender or balance");
		balanceOf[tx.origin] -= value;
		if (value > address(this).balance)
			tx.origin.transfer(address(this).balance);
		else
			tx.origin.transfer(value);
	}
}