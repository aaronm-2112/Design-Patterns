"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Espresso = /** @class */ (function () {
    function Espresso() {
        this.description = "Espresso";
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    Espresso.prototype.getDescription = function () {
        return this.description;
    };
    return Espresso;
}());
exports.default = Espresso;
