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
    // Set the settings factory
    function PayrollExportADP(factory) {
        return _super.call(this, factory) || this;
    }
    // utilize the settings cfactory to get the export settings. then write the export to file. 
    PayrollExportADP.prototype.writeToFile = function () {
        var header = this.ESFactory.createHeader(1); // Magic number. Pretend it is the key for the ADP Export in the db
        var encoding = this.ESFactory.createEncoding();
        console.log("The export's header is " + header.fields + ".");
        console.log("The export's encoding is " + encoding.encoding + ".");
        console.log("ADP export logic.");
        console.log("Good day!");
    };
    return PayrollExportADP;
}(Export_1.default));
exports.default = PayrollExportADP;
