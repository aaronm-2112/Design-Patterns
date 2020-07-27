"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MenuComponent_1 = __importDefault(require("./MenuComponent"));
var NullIterator_1 = __importDefault(require("./NullIterator"));
//Represents leaf nodes in the composite. Leaf operations work, parent node operations throw an exception.
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(name, description, vegetarian, price) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.description = description;
        _this.vegetarian = vegetarian;
        _this.price = price;
        return _this;
    }
    //Leaf operations
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
    MenuItem.prototype.print = function () {
        if (this.isVegetarian()) {
            console.log("Vegetarian dish:");
        }
        console.log(this.name + "; " + this.description + "; " + this.price + ";");
    };
    MenuItem.prototype.createIterator = function () {
        //when this hasNext is called it always returns false as there isn't a next in a menuitem (since it is a leaf node in the composite structure)
        return new NullIterator_1.default();
    };
    return MenuItem;
}(MenuComponent_1.default));
exports.default = MenuItem;
