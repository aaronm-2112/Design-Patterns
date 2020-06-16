import ExportSettingsFactory from './ExportSettingsFactory';
import Header from './Header';
import PayrollExportHeader from './PayrollExportHeader';
import Encoding from './Encoding';
import PayrollExportEncoding from './PayrollExportEncoding';

// Purpose: The concrete implementation of the ExportFactory that creates a family of payroll export settings. 
export default class PayrollExportSettings implements ExportSettingsFactory {
  createHeader(ExportID: Number): Header {
    let header: Header = new PayrollExportHeader();
    header.setFields(ExportID);
    return header;
  }

  createEncoding(): Encoding {
    let encoding: Encoding = new PayrollExportEncoding();
    return encoding;
  }
}
