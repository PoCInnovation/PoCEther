// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './GuessMyPassword.sol';

contract GuessMyPasswordFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address(new GuessMyPassword());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    GuessMyPassword instance = GuessMyPassword(_instance);
    return instance.claim();
  }
}