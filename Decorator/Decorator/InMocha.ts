import InCondimentDecorator from './InCondimentDecorator';
import InBeverage from '../Component/InBeverage';

export default class InMocha extends InCondimentDecorator {
  bev: InBeverage;

  constructor(beverage: InBeverage) {
    super();
    this.bev = beverage;
  }

  cost(): number {
    return this.bev.cost() + .20;
  }

  getDescription(): string {
    return this.bev.getDescription() + ", Mocha";
  }
}