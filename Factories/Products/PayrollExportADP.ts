import Export from "./Export";
import PayrollExportSettings from "../ExportSettings/PayrollExportSettingsFactory";
import Header from "../ExportSettings/Header";
import Encoding from "../ExportSettings/Encoding";

export default class PayrollExportADP extends Export {
  // Set the settings factory
  constructor(factory: PayrollExportSettings) {
    super(factory);
  }

  // utilize the settings cfactory to get the export settings. then write the export to file. 
  writeToFile() {
    let header: Header = this.ESFactory.createHeader(1) // Magic number. Pretend it is the key for the ADP Export in the db
    let encoding: Encoding = this.ESFactory.createEncoding();
    console.log(`The export's header is ${header.fields}.`);
    console.log(`The export's encoding is ${encoding.encoding}.`);
    console.log("ADP export logic.");
    console.log("Good day!");
  }

}