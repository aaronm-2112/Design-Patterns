import CondimentDecorator from "./CondimentDecorator";
import Beverage from "../Component/Beverage";

export default class Mocha extends CondimentDecorator {
  itemCost: number = .20;
  description: string = "Mocha";

  constructor(beverage: Beverage) {
    super(beverage);
    this.itemCost = this.itemCost;
    this.description = this.description;

  }
}