import CaffeineBeverage from "./templateclass/CaffeineBeverage";
//purpose: Utilize the base class hook to change flow of the template
export default class TeaHook extends CaffeineBeverage {
  constructor() {
    super();
  }

  brew(): void {
    console.log("Tea is steeping");
  }

  addCondiments(): void {
    console.log("Adding lemon");
  }

  customerWantsCondiments(): boolean {
    return false;
  }
}