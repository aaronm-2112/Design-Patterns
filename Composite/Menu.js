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
var MenuComponentterator_1 = __importDefault(require("./MenuComponentterator"));
//The composite/parent node of our menu and menu item composite. Supports 
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    //the constructor allows the client to name their menu and give a quick description of it. 
    function Menu(name, description) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.description = description;
        _this.menuComponents = [];
        return _this;
    }
    Menu.prototype.print = function () {
        console.log(this.name + "; " + this.description);
        //print out all of the items in the menuComponents array
        var iterator = this.createIterator();
        while (iterator.hasNext()) {
            var menuComponent = iterator.next();
            menuComponent.print();
        }
    };
    Menu.prototype.getName = function () {
        return this.name;
    };
    Menu.prototype.getDescription = function () {
        return this.name;
    };
    Menu.prototype.addItem = function (menuComponent) {
        this.menuComponents.push(menuComponent);
    };
    Menu.prototype.remove = function (menuComponent) {
        this.menuComponents = this.menuComponents.filter(function (component) {
            component != menuComponent;
        });
    };
    Menu.prototype.getChild = function (position) {
        return this.menuComponents[position];
    };
    //TODO: Check for correctness -- could be less coupled to MenuComponent potentially 
    Menu.prototype.createIterator = function () {
        var iterator = new MenuComponentterator_1.default(this.menuComponents); //concretion in class
        return iterator;
    };
    return Menu;
}(MenuComponent_1.default));
exports.default = Menu;
