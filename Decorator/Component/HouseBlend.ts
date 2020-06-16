import Beverage from "./Beverage";

export default class HouseBlend implements Beverage {
  description: String;

  constructor() {
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return .89;
  }

  getDescription(): String {
    return this.description;
  }
}