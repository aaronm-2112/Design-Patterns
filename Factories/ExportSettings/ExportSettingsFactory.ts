// Purpose: An abstract factory that determines the family of products/settings being used by an Export. 

import Header from "./Header";
import Encoding from "./Encoding";

export default interface ExportSettingsFactory {
  createHeader(ExportID: Number): Header;
  createEncoding(): Encoding;
}