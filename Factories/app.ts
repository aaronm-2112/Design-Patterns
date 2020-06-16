// Where factories are instantiated and utilized

import ExportWriter from './Creators/ExportWriter';
import PayrollExportWriter from './Creators/PayrollExportWriter';


//Write the exports to file 
let exportwriter: ExportWriter = new PayrollExportWriter();
// factory method is used to create the proper export objects. 
// can be improved with use of enums in a more fleshed out example. 
exportwriter.writeExport("PayrollExportGusto");
exportwriter.writeExport("PayrollExportADP");

