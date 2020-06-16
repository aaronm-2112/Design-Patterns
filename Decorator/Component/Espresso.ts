import Beverage from "./Beverage";

export default class Espresso implements Beverage {
  description: String;

  constructor() {
    this.description = "Espresso";
  }

  cost(): number {
    return 1.99;
  }

  getDescription(): String {
    return this.description;
  }
}