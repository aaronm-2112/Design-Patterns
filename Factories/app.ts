// Where factories are instantiated and utilized

import ExportWriter from './ExportWriter';
import PayrollExportWriter from './PayrollExportWriter';


//Write the exports to file 
let exportwriter: ExportWriter = new PayrollExportWriter();
// factory method is used to create the proper export objects. 
// can be improved with use of enums in a more fleshed out example. 
exportwriter.writeExport("PayrollExportGusto");
exportwriter.writeExport("PayrollExportADP");

