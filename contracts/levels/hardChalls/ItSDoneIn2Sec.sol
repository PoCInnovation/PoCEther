// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract ItSDoneIn2Sec {
    address payable public entrant;
    address payable public owner;
    
    constructor() public {
        entrant = msg.sender;
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    modifier gasConsume() {
        require (msg.sender != tx.origin);
        _;
    }
    
    modifier isNotAContract() {
        require((gasleft() % 984) == 0);
        _;
    }
    
    function ItSSuperEasy() public isNotAContract gasConsume {
        entrant = msg.sender;
    }
    
}