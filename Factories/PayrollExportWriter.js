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
var PayrollExportGusto_1 = __importDefault(require("./PayrollExportGusto"));
var PayrollExportADP_1 = __importDefault(require("./PayrollExportADP"));
var PayrollExportWriter = /** @class */ (function (_super) {
    __extends(PayrollExportWriter, _super);
    function PayrollExportWriter() {
        return _super.call(this) || this;
    }
    PayrollExportWriter.prototype.createExport = function (exportIdentifier) {
        switch (exportIdentifier) {
            case "PayrollExportGusto": {
                return new PayrollExportGusto_1.default();
            }
            case "PayrollExportADP": {
                return new PayrollExportADP_1.default();
            }
            default: { // bug if this happens. Just return a Gusto import for now. 
                return new PayrollExportGusto_1.default();
            }
        }
    };
    return PayrollExportWriter;
}(ExportWriter_1.default));
exports.default = PayrollExportWriter;
