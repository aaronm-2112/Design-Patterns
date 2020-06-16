//Purpose: An interface that defines an export and its methods.

import ExportSettingsFactory from "../ExportSettings/ExportSettingsFactory";

export default abstract class Export {

  // a general factory used in the subclasses to create the export settings
  public ESFactory: ExportSettingsFactory;
  // a method that is determined by the product's subclasses
  public abstract writeToFile(): void;

  constructor(ExportSettingsFactory: ExportSettingsFactory) {
    this.ESFactory = ExportSettingsFactory;
  }
}