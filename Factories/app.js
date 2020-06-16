"use strict";
// Where factories are instantiated and utilized
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PayrollExportWriter_1 = __importDefault(require("./Creators/PayrollExportWriter"));
//Write the exports to file 
var exportwriter = new PayrollExportWriter_1.default();
// factory method is used to create the proper export objects. 
// can be improved with use of enums in a more fleshed out example. 
exportwriter.writeExport("PayrollExportGusto");
exportwriter.writeExport("PayrollExportADP");
