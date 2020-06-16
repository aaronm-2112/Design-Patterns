// Purpose: A "product" used by the Export object in writing its import. 
// Note: This could be a class but I don't have any real machinery for it.

export default abstract class Header {
  public length: Number;
  public fields: Array<String>;
  public abstract setFields(PayrollExportID: Number): void

  constructor() {
    this.length = 0;
    this.fields = [];
  }
}