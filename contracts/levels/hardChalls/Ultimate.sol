// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "./Subway.sol";
import "./House.sol";
import "./ItSDoneIn2Sec.sol";
import "./Grumpy.sol";

contract Ultimate {

    address public owner;
    Subway private subwayContract;
    House private houseContract;
    ItSDoneIn2Sec private easyContract;
    Grumpy private grumpyContract;

    constructor() public payable {
        owner = msg.sender;
        subwayContract = (new Subway).value(0.01 ether)();
        houseContract = (new House)(0x53d560affeeaf017bf120737c84cae3735e76d2108ce3cb65997cec3eddd36ce, 0.01 ether);
        easyContract = (new ItSDoneIn2Sec)();
        grumpyContract = (new Grumpy)();
    }

    function isClaim() public view returns (bool) {
        require(address(subwayContract).balance <= 0, "Subway is not claimed");
        require(houseContract.lockedHouse() == false, "House is not claimed");
        require(easyContract.owner() != easyContract.entrant(), "ItSDoneIn2Sec is not claimed");
        require(grumpyContract.currentWaterAmount() == grumpyContract.targetWaterAmount(), "Grumpy is not claimed");
        return true;
    }

    function getSubwayContractAddress() public view returns (address payable) {
        return address(subwayContract);
    }

    function getHouseContractAddress() public view returns (address) {
        return address(houseContract);
    }

    function getEasyContractAddress() public view returns (address) {
        return address(easyContract);
    }

    function getGrumpyContractAddress() public view returns (address) {
        return address(grumpyContract);
    }

}