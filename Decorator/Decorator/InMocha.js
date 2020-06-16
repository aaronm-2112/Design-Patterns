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
var InCondimentDecorator_1 = __importDefault(require("./InCondimentDecorator"));
var InMocha = /** @class */ (function (_super) {
    __extends(InMocha, _super);
    function InMocha(beverage) {
        var _this = _super.call(this) || this;
        _this.bev = beverage;
        return _this;
    }
    InMocha.prototype.cost = function () {
        return this.bev.cost() + .20;
    };
    InMocha.prototype.getDescription = function () {
        return this.bev.getDescription() + ", Mocha";
    };
    return InMocha;
}(InCondimentDecorator_1.default));
exports.default = InMocha;
