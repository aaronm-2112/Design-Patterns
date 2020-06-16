import ExportWriter from "./ExportWriter";
import Export from "../Products/Export";
import PayrollExportGusto from "../Products/PayrollExportGusto";
import PayrollExportADP from "../Products/PayrollExportADP";
import PayrollExportSettings from "../ExportSettings/PayrollExportSettingsFactory";
import ExportSettingsFactory from "../ExportSettings/ExportSettingsFactory";

export default class PayrollExportWriter extends ExportWriter {

  createExport(exportIdentifier: String): Export {
    let settingsfactory: ExportSettingsFactory = new PayrollExportSettings();
    let selectedExport: Export;

    switch (exportIdentifier) {
      case "PayrollExportGusto": {
        selectedExport = new PayrollExportGusto(settingsfactory);
        break;
      }
      case "PayrollExportADP": {
        selectedExport = new PayrollExportADP(settingsfactory);
        break;
      }
      default: { // bug if this happens. Just return a Gusto import for now. 
        selectedExport = new PayrollExportGusto(settingsfactory);
      }
    }
    return selectedExport;
  }
}