"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var singelton_1 = __importDefault(require("./singelton"));
// grab references to the singleton instance -- both flags are set to false
var singleOne = singelton_1.default.getInstance();
var singleTwo = singelton_1.default.getInstance();
// set both flags to true 
singleOne.setFlagOne(true);
singleTwo.setFlagTwo(true);
//check that both flags are true for both references to make sure it is working properly 
console.log(singleOne.getFlagOne());
console.log(singleOne.getFlagTwo());
