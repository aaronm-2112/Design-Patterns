//traverses a menu of items and submenus

import MenuComponent from "./MenuComponent";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Waitress from "./Waitress";
import CompositeIterator from './CompositeIterator';
//Create top level menu
let menus: MenuComponent = new Menu("Diner Super Menu", "This is a menu of menu's at the Super Diner!");

//create submenus
let vegetarianMenu: MenuComponent = new Menu("Vegetarian Menu", "A collection of vegetarian food!");
vegetarianMenu.addItem(new MenuItem("Miso Soup", "Miso soup with tofu", true, 2.25));
vegetarianMenu.addItem(new MenuItem("Black Bean Burger", "A black bean burger with fries", true, 4.00));

let meatyMenu: MenuComponent = new Menu("Meaty Menu", "A menu filled with meat selections");
meatyMenu.addItem(new MenuItem("Tri-tip Sandwich", "A tri-tip sandwich", false, 4.25));
meatyMenu.addItem(new MenuItem("Bacon Burger", "A burger with bacon adn fries.", false, 4.00));

let kidsMenu: MenuComponent = new Menu("Kids' Meaty Menu", "A menu with meat selections catered to kids.")
kidsMenu.addItem(new MenuItem("Chicken Strips", "Strips of chicken", false, 1.50));
kidsMenu.addItem(new MenuItem("Chicken Nuggets", "Nuggets of chicken", false, 1.50));

//add meatyMenu kids to adult meat selection menu
meatyMenu.addItem(kidsMenu);

//add menus to the main menu
menus.addItem(vegetarianMenu);
menus.addItem(meatyMenu);

//Create the waitress that will be reading off the menu to patrons
let waitress: Waitress = new Waitress(menus);

//print the menus of menus
waitress.printMenu();

//composite iterator in the waitress to print all vegetarian menu items
//What is a composite Iterator: An iterator that actually traverses individual items in the composite structure item by item. To do this it keeps track of the 
//MenuComponent iterators that allow for traversal of the data structure.This is different than print method, where we do not actually need to keep track of our place in the composite structure. 
//A composite iterator is required when doing more complicated operations over a composite data structure. 
waitress.printVegetarianMenu();

// //testing the composite iterator -- aka an external iterator that traverses the composite data structure while maintaining its position




