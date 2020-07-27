"use strict";
//Purpose: Interface for the composite menu structure. Operations support menu traversal and actions. This interface is necessary to allow a collection of nodes (leaf and parent nodes) to be treated as a unit, and individually. The Menu and MenuItem classes will implement this interface and be the parent and leaf nodes. Since both classes will be considered a "MenuComponent" they can be treated the same. 
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
//Provide default implementation 
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    //leaf operations
    MenuComponent.prototype.getName = function () {
        throw console_1.exception("Unsupported operation");
    };
    MenuComponent.prototype.getDescription = function () {
        throw console_1.exception("Unsupported operation");
    };
    MenuComponent.prototype.getPrice = function () {
        throw console_1.exception("Unsupported operation");
    };
    MenuComponent.prototype.isVegetarian = function () {
        throw console_1.exception("Unsupported operation");
    };
    //parent node operations
    MenuComponent.prototype.print = function () {
        throw console_1.exception("Unsupported operation");
    };
    MenuComponent.prototype.addItem = function (menuComponent) {
        throw console_1.exception("Unsupported operation");
    };
    MenuComponent.prototype.removeItem = function (menuComponent) {
        throw console_1.exception("Unsupported operation");
    };
    MenuComponent.prototype.getChildItem = function (position) {
        throw console_1.exception("Unsupported operation");
    };
    //For iterating through menus 
    MenuComponent.prototype.createIterator = function () {
        throw console_1.exception("Unsupported operation");
    };
    //for more specialized iterations through the composite structure 
    MenuComponent.prototype.createCompositeIterator = function () {
        throw console_1.exception("Unsupported operation");
    };
    return MenuComponent;
}());
exports.default = MenuComponent;
