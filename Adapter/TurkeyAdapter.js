"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TurkeyAdapter = /** @class */ (function () {
    function TurkeyAdapter(turkey) {
        this.turkey = turkey;
    }
    TurkeyAdapter.prototype.quack = function () {
        this.turkey.gobble();
    };
    TurkeyAdapter.prototype.fly = function () {
        for (var i = 0; i < 4; i++) {
            this.turkey.fly();
        }
    };
    return TurkeyAdapter;
}());
exports.default = TurkeyAdapter;
