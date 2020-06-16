"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PayrollExportHeader_1 = __importDefault(require("./PayrollExportHeader"));
var PayrollExportEncoding_1 = __importDefault(require("./PayrollExportEncoding"));
// Purpose: The concrete implementation of the ExportFactory that creates a family of payroll export settings. 
var PayrollExportSettings = /** @class */ (function () {
    function PayrollExportSettings() {
    }
    PayrollExportSettings.prototype.createHeader = function (ExportID) {
        var header = new PayrollExportHeader_1.default();
        header.setFields(ExportID);
        return header;
    };
    PayrollExportSettings.prototype.createEncoding = function () {
        var encoding = new PayrollExportEncoding_1.default();
        return encoding;
    };
    return PayrollExportSettings;
}());
exports.default = PayrollExportSettings;
