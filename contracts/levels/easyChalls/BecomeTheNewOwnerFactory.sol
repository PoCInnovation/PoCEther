// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './BecomeTheNewOwner.sol';

contract BecomeTheNewOwnerFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address(new BecomeTheNewOwner());
  }

  function validateInstance(address payable _instance, address _player) override public returns (bool) {
    // _player;
    BecomeTheNewOwner instance = BecomeTheNewOwner(_instance);
    return instance.owner() == _player;
  }
}