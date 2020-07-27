"use strict";
//Purpose: Utilize a template method for outlining the steps in an algorithm for brewing a ceffeinated beverage.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Coffee_1 = __importDefault(require("./Coffee"));
var Tea_1 = __importDefault(require("./Tea"));
var TeaHook_1 = __importDefault(require("./TeaHook"));
//create the coffee caffeineated beverage subtype
var coffee = new Coffee_1.default();
//create the tea subtype
var tea = new Tea_1.default();
//use the prepareRecipe method
coffee.prepareRecipe();
tea.prepareRecipe();
//utilize the hook
console.log("Hook with tea class: ");
var hookTea = new TeaHook_1.default();
hookTea.prepareRecipe();
