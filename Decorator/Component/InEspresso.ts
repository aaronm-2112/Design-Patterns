import InBeverage from './InBeverage';

export default class InEspresso extends InBeverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 1.00;
  }
}