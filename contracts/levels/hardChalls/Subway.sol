// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Subway {
    
    address private owner;
    uint256 public ticketPrice;
    mapping(address => uint) private balances;
    mapping(address => uint) private ticketsBalances;
    
    constructor() public payable {
        ticketPrice = msg.value;
        owner = msg.sender;
    }
    
    function credit() public payable {
        balances[msg.sender] = balances[msg.sender] + msg.value;
    }
    
    function buyTickets(uint256 number) public {
        require(balances[msg.sender] >= (number * ticketPrice), "Not enough money");
        balances[msg.sender] = balances[msg.sender] - (number * ticketPrice);
        ticketsBalances[msg.sender] = ticketsBalances[msg.sender] + number;
    }
    
    function balanceOf() public view returns (uint balance) {
        return (balances[msg.sender]);
    }
    
    function ticketsBalanceOf() public view returns (uint ticketsBalance) {
        return (ticketsBalances[msg.sender]);
    }
    
    function checkSecurity() public {
        require (ticketsBalances[msg.sender] >= 1, "Not enough tickets");
        (bool result, bytes memory data) = msg.sender.call.value(ticketPrice / 5)("");
        ticketsBalances[msg.sender] -= 1;
    }

    fallback() external payable {}
    
}