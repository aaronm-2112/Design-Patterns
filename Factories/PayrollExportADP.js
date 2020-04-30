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
var Export_1 = __importDefault(require("./Export"));
var PayrollExportADP = /** @class */ (function (_super) {
    __extends(PayrollExportADP, _super);
    function PayrollExportADP() {
        var _this = _super.call(this) || this;
        //this would be set froma database call 
        _this.header = ["Daily Overtime @ 2nd Rate", "Regular Hours", "Sick Hours"];
        return _this;
    }
    PayrollExportADP.prototype.writeToFile = function () {
        console.log(this.header);
        console.log("ADP export logic.");
        console.log("Good day!");
    };
    return PayrollExportADP;
}(Export_1.default));
exports.default = PayrollExportADP;
