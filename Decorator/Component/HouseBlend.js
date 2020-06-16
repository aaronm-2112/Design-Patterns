"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HouseBlend = /** @class */ (function () {
    function HouseBlend() {
        this.description = "House Blend Coffee";
    }
    HouseBlend.prototype.cost = function () {
        return .89;
    };
    HouseBlend.prototype.getDescription = function () {
        return this.description;
    };
    return HouseBlend;
}());
exports.default = HouseBlend;
