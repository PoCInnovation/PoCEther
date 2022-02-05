// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './GuessMyRandomPassword.sol';

contract GuessMyRandomPasswordFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address(new GuessMyRandomPassword());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    GuessMyRandomPassword instance = GuessMyRandomPassword(_instance);
    return instance.claim();
  }
}