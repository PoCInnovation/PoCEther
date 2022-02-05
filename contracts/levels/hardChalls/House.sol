// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract House {
    
    address private owner;
    uint256 private etherAmount;
    bool public lockedHouse = true;
    bytes32 private password;
    
    constructor(bytes32 _password, uint256 _etherAmount) public {
        password = _password;
        etherAmount = _etherAmount;
        owner = msg.sender;
    }

    modifier isContract {
        require (msg.sender != tx.origin, "Not a contract");
        _;
    }
    
    function openTheHouse(uint256 _password) public payable isContract {
        require (msg.value == etherAmount, "Bad ether number sent");
        if (keccak256(abi.encodePacked(_password)) == password)
            lockedHouse = false;
    }
    
    function youCanWithdrawAllTheBalance(address payable _to) public {
        _to.transfer(address(this).balance);
    }
    
}