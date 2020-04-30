//Purpose: An interface that defines how to write an export to a file.

import Export from "./Export";

export default abstract class ExportWriter {

  // the factory method that will be implemented by subclasses. 
  public abstract createExport(exportIdentifier: string): Export;

  // the method that utilizes the product returned by the factory method via interface 
  public writeExport(exportIdentifier: string): void {
    // Get the export object let export: string;
    let exportItem: Export = this.createExport(exportIdentifier);

    // use the export object to write the export to a file
    exportItem.writeToFile();

  }

}