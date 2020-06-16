"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Use an iterator to traverse and access menu items from a pancake house and a diner using a waitress class to print menu items.
var Waitress_1 = __importDefault(require("./Waitress"));
var PancackeHouseMenu_1 = __importDefault(require("./PancackeHouseMenu"));
var DinerMenu_1 = __importDefault(require("./DinerMenu"));
//create the menus the waitress will print
var breakfastMenu = new PancackeHouseMenu_1.default();
var dinerMenu = new DinerMenu_1.default();
//create the waitress and pass in the menus the class needs to print 
var waitress = new Waitress_1.default(breakfastMenu, dinerMenu);
//print the menu using the iterators 
waitress.printMenu();
// Woo woo 
