"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem_1 = __importDefault(require("./MenuItem"));
var PancakeHouseIterator_1 = __importDefault(require("./PancakeHouseIterator"));
var PancakeHouseMenu = /** @class */ (function () {
    function PancakeHouseMenu() {
        this.menuItems = []; //simulate arraylist
        this.addItem("Pancake Breakfast", "Pancakes with egss", true, 2.99);
        this.addItem("Blueberry Pancake Breakfast", "Pancakes with blueberries", true, 2.99);
    }
    PancakeHouseMenu.prototype.addItem = function (name, description, vegetarian, price) {
        var menuItem = new MenuItem_1.default(name, description, vegetarian, price);
        this.menuItems.push(menuItem);
    };
    //violates encapsulation
    // getMenuItems(): Array<MenuItem> {
    //   return this.menuItems;
    // }
    //encapsulate array details from client by using an iterator for traversal and access instead of the above method
    PancakeHouseMenu.prototype.createIterator = function () {
        //return the iterator to the user -- encapsulates traversal and item access so client doesn't see those implementation details
        return new PancakeHouseIterator_1.default(this.menuItems);
        [];
    };
    return PancakeHouseMenu;
}());
exports.default = PancakeHouseMenu;
