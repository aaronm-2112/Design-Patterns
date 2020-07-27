"use strict";
//traverses a menu of items and submenus
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = __importDefault(require("./Menu"));
var MenuItem_1 = __importDefault(require("./MenuItem"));
var Waitress_1 = __importDefault(require("./Waitress"));
//Create top level menu
var menus = new Menu_1.default("Diner Super Menu", "This is a menu of menu's at the Super Diner!");
//create submenus
var vegetarianMenu = new Menu_1.default("Vegetarian Menu", "A collection of vegetarian food!");
vegetarianMenu.addItem(new MenuItem_1.default("Miso Soup", "Miso soup with tofu", true, 2.25));
vegetarianMenu.addItem(new MenuItem_1.default("Black Bean Burger", "A black bean burger with fries", true, 4.00));
var meatyMenu = new Menu_1.default("Meaty Menu", "A menu filled with meat selections");
meatyMenu.addItem(new MenuItem_1.default("Tri-tip Sandwich", "A tri-tip sandwich", false, 4.25));
meatyMenu.addItem(new MenuItem_1.default("Bacon Burger", "A burger with bacon adn fries.", false, 4.00));
var kidsMenu = new Menu_1.default("Kids' Meaty Menu", "A menu with meat selections catered to kids.");
kidsMenu.addItem(new MenuItem_1.default("Chicken Strips", "Strips of chicken", false, 1.50));
kidsMenu.addItem(new MenuItem_1.default("Chicken Nuggets", "Nuggets of chicken", true, 1.50));
//add meatyMenu kids to adult meat selection menu
meatyMenu.addItem(kidsMenu);
//add menus to the main menu
menus.addItem(vegetarianMenu);
menus.addItem(meatyMenu);
//Create the waitress that will be reading off the menu to patrons
var waitress = new Waitress_1.default(menus);
//print the menus of menus
//waitress.printMenu();
//composite iterator in the waitress to print all vegetarian menu items
waitress.printVegetarianMenu();
// //testing the composite iterator -- aka an external iterator that traverses the composite data structure while maintaining its position
// let compositeIterator: CompositeIterator = new CompositeIterator(menus.createIterator());
// while (compositeIterator.hasNext()) {
//   console.log(compositeIterator.next());
// }
// //console.log(compositeIterator.next());
