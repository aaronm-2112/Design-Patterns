"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck_1 = __importDefault(require("./MallardDuck"));
var Turkey_1 = __importDefault(require("./Turkey"));
var TurkeyAdapter_1 = __importDefault(require("./TurkeyAdapter"));
//create the base duck and turkey
var duck = new MallardDuck_1.default();
var turkey = new Turkey_1.default();
//a function that requires a duck interface 
function duckCalls(duck) {
    duck.fly();
    duck.quack();
}
duckCalls(duck);
// duckCalls(turkey); --cannot call for turkey
//use the turkey adapter -- it is type duck
var turkeyAdapter = new TurkeyAdapter_1.default(turkey);
duckCalls(turkeyAdapter); //can now use duckCalls
