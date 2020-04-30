"use strict";
// Where factories are instantiated and utilized
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PayrollExportWriter_1 = __importDefault(require("./PayrollExportWriter"));
//Write the exports to file 
var exportwriter = new PayrollExportWriter_1.default();
exportwriter.writeExport("PayrollExportGusto");
exportwriter.writeExport("PayrollExportADP");
