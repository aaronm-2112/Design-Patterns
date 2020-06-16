import Export from "./Export";
import PayrollExportSettings from "../ExportSettings/PayrollExportSettingsFactory";
import Header from "../ExportSettings/Header";
import Encoding from "../ExportSettings/Encoding";

export default class PayrollExportGusto extends Export {
  // Set the settings factory
  constructor(factory: PayrollExportSettings) {
    super(factory);
  }

  writeToFile() {
    let header: Header = this.ESFactory.createHeader(2) // Magic number. Pretend it is the key for the Gusto Export in the db
    let encoding: Encoding = this.ESFactory.createEncoding();
    console.log(`The export's header is ${header.fields}.`);
    console.log(`The export's encoding is ${encoding.encoding}.`);
    console.log("Gusto export logic.");
    console.log("Good day!");
  }

}