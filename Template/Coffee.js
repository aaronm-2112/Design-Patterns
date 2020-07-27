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
//Purpose: Plugs into the CaffieneBeverage framework and provides an implementation of undefined steps that the coffee class has a particular implementation of. 
var CaffeineBeverage_1 = __importDefault(require("./templateclass/CaffeineBeverage"));
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        return _super.call(this) || this;
    }
    Coffee.prototype.brew = function () {
        console.log("Brewing coffee");
    };
    Coffee.prototype.addCondiments = function () {
        console.log("Adding cream");
    };
    return Coffee;
}(CaffeineBeverage_1.default));
exports.default = Coffee;
