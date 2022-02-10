// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './Bank.sol';

contract BankFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address((new Bank).value(0.01 ether)());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    Bank instance = Bank(_instance);
    if (address(instance).balance < 0.01 ether)
      return true;
    else
      return false;
  }
}