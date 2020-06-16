"use strict";
//Purpose: An interface that defines how to write an export to a file.
Object.defineProperty(exports, "__esModule", { value: true });
var ExportWriter = /** @class */ (function () {
    function ExportWriter() {
    }
    // the method that utilizes the product returned by the factory method via interface 
    ExportWriter.prototype.writeExport = function (exportIdentifier) {
        // Get the export object let export: string;
        var exportItem = this.createExport(exportIdentifier);
        // use the export object to write the export to a file
        exportItem.writeToFile();
    };
    return ExportWriter;
}());
exports.default = ExportWriter;
