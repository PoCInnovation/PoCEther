// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './IDoNothing.sol';

contract IDoNothingFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address(new IDoNothing());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    IDoNothing instance = IDoNothing(_instance);
    if (address(instance).balance > 0 ether)
      return true;
    else
      return false;
  }
}