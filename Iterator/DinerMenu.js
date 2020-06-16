"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem_1 = __importDefault(require("./MenuItem"));
var DinerMenuIterator_1 = __importDefault(require("./DinerMenuIterator"));
var DinerMenu = /** @class */ (function () {
    function DinerMenu() {
        this.numberOfItems = 0;
        this.menuItems = new Array(DinerMenu.MAX_ITEMS);
        this.addItem("Fake bacon Breakfast", "Vegetarian bacon and eggs", true, 2.99);
        this.addItem("BLT", "Bacon lettuce and tomatoes", false, 2.99);
    }
    DinerMenu.prototype.addItem = function (name, description, vegetarian, price) {
        var menuItem = new MenuItem_1.default(name, description, vegetarian, price);
        if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
            console.error("Too many items in the menu.");
        }
        else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems += 1;
        }
    };
    //encapsulate array details from client by using an iterator for traversal and access instead of the above method
    DinerMenu.prototype.createIterator = function () {
        //return the iterator to the user -- encapsulates traversal and item access so client doesn't see those implementation details
        return new DinerMenuIterator_1.default(this.menuItems);
    };
    DinerMenu.MAX_ITEMS = 4;
    return DinerMenu;
}());
exports.default = DinerMenu;
