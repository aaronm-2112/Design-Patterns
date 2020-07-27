"use strict";
//Purpose: The interface that needs to be adapted in order for the client to call it using the duck interface.
Object.defineProperty(exports, "__esModule", { value: true });
var Turkey = /** @class */ (function () {
    function Turkey() {
    }
    Turkey.prototype.gobble = function () {
        console.log("Gobble gobble");
    };
    Turkey.prototype.fly = function () {
        console.log("Im a turkey flying for a short time");
    };
    return Turkey;
}());
exports.default = Turkey;
