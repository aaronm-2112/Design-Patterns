"use strict";
//Purpose: A basic receiver that can turn on and off
Object.defineProperty(exports, "__esModule", { value: true });
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.on = function () {
        console.log("Light is on!");
    };
    Light.prototype.off = function () {
        console.log("Light is off!");
    };
    return Light;
}());
exports.default = Light;
