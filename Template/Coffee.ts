//Purpose: Plugs into the CaffieneBeverage framework and provides an implementation of undefined steps that the coffee class has a particular implementation of. 
import CaffeineBeverage from './templateclass/CaffeineBeverage';


export default class Coffee extends CaffeineBeverage {
  constructor() {
    super();
  }

  brew(): void {
    console.log("Brewing coffee");
  }

  addCondiments(): void {
    console.log("Adding cream");
  }
}