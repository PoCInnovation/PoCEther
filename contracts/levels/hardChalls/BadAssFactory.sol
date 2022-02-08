// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import '../base/Level.sol';
import './BadAss.sol';

contract BadAssFactory is Level {

  string temp = "0x476F6F64206A6F622C20796F75206B6E6F7720686F7720746F2066696E642074686520696E666F732061742074686520726F6F742121";

  function createInstance(address _player) override public payable returns (address) {
    _player;
    return address((new BadAss).value(1 ether)(temp, payable(address(this))));
  }

  function validateInstance(address payable _instance, address) override public returns (bool) {
    // _player;
    BadAss instance = BadAss(_instance);
    if (instance.whoIsTheBadass() != instance.owner()) {
        instance.takeOwnerShip(keccak256(abi.encodePacked(temp)));
        if (instance.whoIsTheBadass() != instance.owner())
            return true;
    }
    return false;
  }

  receive() external payable {}

}