"use strict";
//Purpose: The high level component that dictates the algorithm steps for making a caffeine based beverage.
Object.defineProperty(exports, "__esModule", { value: true });
var CaffeineBeverage = /** @class */ (function () {
    function CaffeineBeverage() {
    }
    //the algorithm definition -- should not be overridable but no typescript way to do this that is obvious
    CaffeineBeverage.prototype.prepareRecipe = function () {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    };
    //a concrete method dictated by the base class
    CaffeineBeverage.prototype.boilWater = function () {
        console.log("Boiling water");
    };
    //a concrete method dictated by the base class
    CaffeineBeverage.prototype.pourInCup = function () {
        console.log("Pouring into cup");
    };
    //a hook with a default implementation that can be overriden in the subclasses -- as it is does not change algorithm flow until subclass changes its behaviour 
    CaffeineBeverage.prototype.customerWantsCondiments = function () {
        return true;
    };
    return CaffeineBeverage;
}());
exports.default = CaffeineBeverage;
