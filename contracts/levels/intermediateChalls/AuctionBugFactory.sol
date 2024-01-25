// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './AuctionBug.sol';

contract AuctionBugFactory is Level {

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address((new AuctionBug).value(0.01 ether)());
  }

  function validateInstance(address payable _instance, address _player) override public returns (bool) {
    // _player;
    AuctionBug instance = AuctionBug(_instance);
    if (address(instance).balance == 0 ether)
      return true;
    return false;
  }
}
