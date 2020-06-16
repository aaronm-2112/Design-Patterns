import Encoding from './Encoding';

export default class PayrollExportEncoding implements Encoding {
  encoding: String;

  constructor() {
    this.encoding = "UTF-8";
  }
}