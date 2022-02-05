// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './BecomeTheOwner.sol';

contract BecomeTheOwnerFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address(new BecomeTheOwner());
  }

  function validateInstance(address payable _instance, address _player) override public returns (bool) {
    // _player;
    BecomeTheOwner instance = BecomeTheOwner(_instance);
    return instance.owner() == _player;
  }
}