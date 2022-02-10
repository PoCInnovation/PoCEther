// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './Ultimate.sol';

contract UltimateFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address((new Ultimate).value(0.01 ether)());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    Ultimate instance = Ultimate(_instance);
    return instance.isClaim();
  }

  receive() external payable {}

}