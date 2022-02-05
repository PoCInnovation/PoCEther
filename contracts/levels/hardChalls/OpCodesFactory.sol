// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './Justin.sol';

contract OpCodesFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address((new Justin).value(1 ether)());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    if (_instance.balance == 0)
        return true;
    return false;
  }

  receive() external payable {}

}