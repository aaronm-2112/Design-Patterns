// Purpose: 

import Header from './Header';

export default class PayrollExportHeader extends Header {
  constructor() {
    super();
  }

  // A mock method
  setFields(payrollExportID: Number) {
    console.log(`Setting fields with a database call to PayrollExports and an ID of: ${payrollExportID}`);
    this.fields = ["Reg Hours", "Overtime Hours"];
    this.fields.length = 1;
  }

}