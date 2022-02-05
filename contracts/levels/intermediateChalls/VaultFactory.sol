// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './Vault.sol';

contract VaultFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address(new Vault());
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    Vault instance = Vault(_instance);
    return instance.open();
  }
}