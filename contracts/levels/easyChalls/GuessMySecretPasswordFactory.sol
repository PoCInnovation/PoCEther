// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './GuessMySecretPassword.sol';

contract GuessMySecretPasswordFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address(new GuessMySecretPassword());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    GuessMySecretPassword instance = GuessMySecretPassword(_instance);
    return instance.claim();
  }
}