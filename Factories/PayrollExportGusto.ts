import Export from "./Export";

export default class PayrollExportGusto extends Export {
  constructor() {
    super();
    //this would be set froma database call 
    this.header = ["Daily Overtime", "Regular Hours", "Vacation Hours"];
  }

  writeToFile() {
    console.log(this.header);
    console.log("Gusto export logic.");
    console.log("Good day!");
  }

}