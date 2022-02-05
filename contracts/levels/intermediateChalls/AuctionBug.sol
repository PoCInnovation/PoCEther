// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract AuctionBug {
	
	mapping(address => uint) public price;
	address payable public owner;

	constructor() public {
		owner = msg.sender;
		price[owner] = 100 * (1 ether);
	}

	modifier onlyOwner {
		require(tx.origin == owner);
		_;
	}

	function addToAuction() public payable {
		require(tx.origin != msg.sender);
		require(msg.value <= 0.1 ether);
		price[owner] += msg.value;
		if (price[tx.origin] > price[owner])
			owner = tx.origin;
	}

	function getPrice() public view returns (uint) {
		return price[tx.origin];
	}

	function withdrawPrice() public onlyOwner {
		owner.send(address(this).balance);
	}

	receive() external payable {
		require(msg.value > 0 && price[owner] > 100 ether);
		owner = tx.origin;
	}

}
