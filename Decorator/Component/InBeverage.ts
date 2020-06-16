import Beverage from "./Beverage";

export default abstract class InBeverage {
  description: String = "Unknown beverage";

  abstract cost(): number;

  getDescription(): String {
    return this.description;
  }
}