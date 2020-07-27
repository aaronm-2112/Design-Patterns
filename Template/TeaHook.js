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
var CaffeineBeverage_1 = __importDefault(require("./templateclass/CaffeineBeverage"));
//purpose: Utilize the base class hook to change flow of the template
var TeaHook = /** @class */ (function (_super) {
    __extends(TeaHook, _super);
    function TeaHook() {
        return _super.call(this) || this;
    }
    TeaHook.prototype.brew = function () {
        console.log("Tea is steeping");
    };
    TeaHook.prototype.addCondiments = function () {
        console.log("Adding lemon");
    };
    TeaHook.prototype.customerWantsCondiments = function () {
        return false;
    };
    return TeaHook;
}(CaffeineBeverage_1.default));
exports.default = TeaHook;
