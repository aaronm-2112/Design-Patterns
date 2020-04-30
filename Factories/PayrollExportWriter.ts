import ExportWriter from "./ExportWriter";
import Export from "./Export";
import PayrollExportGusto from "./PayrollExportGusto";
import PayrollExportADP from "./PayrollExportADP";

export default class PayrollExportWriter extends ExportWriter {
  constructor() {
    super();
  }

  createExport(exportIdentifier: String): Export {
    switch (exportIdentifier) {
      case "PayrollExportGusto": {
        return new PayrollExportGusto();
      }
      case "PayrollExportADP": {
        return new PayrollExportADP();
      }
      default: { // bug if this happens. Just return a Gusto import for now. 
        return new PayrollExportGusto();
      }

    }


  }
}