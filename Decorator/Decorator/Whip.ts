import CondimentDecorator from "./CondimentDecorator";
import Beverage from "../Component/Beverage";

export default class Whip extends CondimentDecorator {

  itemCost: number = .15;
  description: string = "Whip";

  constructor(beverage: Beverage) {
    super(beverage);
    this.itemCost = this.itemCost;
    this.description = this.description;

  }
} 