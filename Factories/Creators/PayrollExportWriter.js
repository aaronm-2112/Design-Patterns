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
var ExportWriter_1 = __importDefault(require("./ExportWriter"));
var PayrollExportGusto_1 = __importDefault(require("../Products/PayrollExportGusto"));
var PayrollExportADP_1 = __importDefault(require("../Products/PayrollExportADP"));
var PayrollExportSettingsFactory_1 = __importDefault(require("../ExportSettings/PayrollExportSettingsFactory"));
var PayrollExportWriter = /** @class */ (function (_super) {
    __extends(PayrollExportWriter, _super);
    function PayrollExportWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayrollExportWriter.prototype.createExport = function (exportIdentifier) {
        var settingsfactory = new PayrollExportSettingsFactory_1.default();
        var selectedExport;
        switch (exportIdentifier) {
            case "PayrollExportGusto": {
                selectedExport = new PayrollExportGusto_1.default(settingsfactory);
                break;
            }
            case "PayrollExportADP": {
                selectedExport = new PayrollExportADP_1.default(settingsfactory);
                break;
            }
            default: { // bug if this happens. Just return a Gusto import for now. 
                selectedExport = new PayrollExportGusto_1.default(settingsfactory);
            }
        }
        return selectedExport;
    };
    return PayrollExportWriter;
}(ExportWriter_1.default));
exports.default = PayrollExportWriter;
