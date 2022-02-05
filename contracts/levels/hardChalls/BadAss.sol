// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract BadAss {
    address payable private badass;
    address payable private sender;
    address payable public owner;
    uint256 private prize;
    bytes32 private password;

    constructor(string memory _password, address payable _owner) public payable {
        owner = _owner;
        badass =_owner;
        prize = msg.value;
        password = keccak256(abi.encodePacked(_password));
    }
    
    modifier isContract() {
        if (msg.sender != owner) {
            if (msg.sender == tx.origin) {
                msg.sender.transfer(msg.value);
                revert("The sender is not a contract");
            }
        }
        _;
    }
    
    modifier goodEtherAmount() {
        if (msg.sender != owner) {
            if (msg.value != prize) {
                msg.sender.transfer(msg.value);
                revert("Bad ether amount sent");
            }
        }
        _;
    }
    
    modifier goodPassword(bytes32 _password) {
        if (_password != password) {
            msg.sender.transfer(msg.value);
            revert("Bad password");
        }
        _;
    }
    
    function takeOwnerShip(bytes32 _password) public payable isContract goodEtherAmount goodPassword(_password) {
        bool status = badass.send(prize);
        if (status == true)
            badass = msg.sender;
    }
    
    function whoIsTheBadass() public view returns (address payable) {
        return badass;
    }
}