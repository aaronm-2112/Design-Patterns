import CaffeineBeverage from "./templateclass/CaffeineBeverage";

export default class Tea extends CaffeineBeverage {
  constructor() {
    super();
  }

  brew(): void {
    console.log("Tea is steeping");
  }

  addCondiments(): void {
    console.log("Adding lemon");
  }
}