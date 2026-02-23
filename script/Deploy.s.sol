// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {HelloArchitect} from "../src/HelloArchitect.sol";

contract DeployScript is Script {
    function run() external returns (HelloArchitect deployed) {
        vm.startBroadcast();
        deployed = new HelloArchitect();
        vm.stopBroadcast();
    }
}
