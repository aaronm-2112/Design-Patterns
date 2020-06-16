"use strict";
// Purpose: 
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
var Header_1 = __importDefault(require("./Header"));
var PayrollExportHeader = /** @class */ (function (_super) {
    __extends(PayrollExportHeader, _super);
    function PayrollExportHeader() {
        return _super.call(this) || this;
    }
    // A mock method
    PayrollExportHeader.prototype.setFields = function (payrollExportID) {
        console.log("Setting fields with a database call to PayrollExports and an ID of: " + payrollExportID);
        this.fields = ["Reg Hours", "Overtime Hours"];
        this.fields.length = 1;
    };
    return PayrollExportHeader;
}(Header_1.default));
exports.default = PayrollExportHeader;
