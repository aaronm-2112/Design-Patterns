"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CompositeIterator_1 = __importDefault(require("./CompositeIterator"));
var Waitress = /** @class */ (function () {
    //allow for polymorphism 
    function Waitress(menus) {
        this.menus = menus;
    }
    Waitress.prototype.printMenu = function () {
        //traverse the menus 
        this.menus.print();
    };
    Waitress.prototype.printVegetarianMenu = function () {
        var iterator = new CompositeIterator_1.default(this.menus.createIterator());
        while (iterator.hasNext()) {
            var component = iterator.next();
            try {
                if (component.isVegetarian()) {
                    component.print();
                }
            }
            catch (e) {
                //console.log(e);
            }
        }
    };
    return Waitress;
}());
exports.default = Waitress;
