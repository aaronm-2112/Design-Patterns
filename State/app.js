"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GumballMachine_1 = __importDefault(require("./GumballMachine"));
var machine = new GumballMachine_1.default(3);
machine.insertQuarter();
machine.turnCrank();
console.log("");
machine.insertQuarter();
machine.turnCrank();
console.log("");
machine.insertQuarter();
machine.turnCrank();
console.log("");
machine.insertQuarter();
machine.turnCrank();
