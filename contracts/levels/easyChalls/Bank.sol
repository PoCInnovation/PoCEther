// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Bank {
	mapping(address => uint256) public balanceOf;

	constructor() public payable {
		require(msg.value == 1 ether);
	}

	function getBalance() public view returns (uint256) {
		return (balanceOf[tx.origin]);
	}

	function deposit() public payable {
		require(tx.origin != msg.sender);
		balanceOf[tx.origin] += msg.value;
	}

	function withdraw(uint256 value) public {
		require((tx.origin != msg.sender) && (balanceOf[tx.origin] > 0));
		balanceOf[tx.origin] -= value;
		require(address(this).balance >= value);
		tx.origin.transfer(value);
	}
}