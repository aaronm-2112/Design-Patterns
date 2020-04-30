import Export from "./Export";

export default class PayrollExportADP extends Export {
  constructor() {
    super();
    //this would be set froma database call 
    this.header = ["Daily Overtime @ 2nd Rate", "Regular Hours", "Sick Hours"];
  }

  writeToFile() {
    console.log(this.header);
    console.log("ADP export logic.");
    console.log("Good day!");
  }

}