"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem = /** @class */ (function () {
    function MenuItem(name, description, vegetarian, price) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
    MenuItem.prototype.getName = function () {
        return this.name;
    };
    MenuItem.prototype.getDescription = function () {
        return this.description;
    };
    MenuItem.prototype.getPrice = function () {
        return this.price;
    };
    MenuItem.prototype.isVegetarian = function () {
        return this.vegetarian;
    };
    return MenuItem;
}());
exports.default = MenuItem;
