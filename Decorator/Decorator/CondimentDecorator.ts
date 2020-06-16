import Beverage from "../Component/Beverage";
//Purpose: Subclass the Component to get the same type. Include new methods to add new behaviour at run time to the objects being decorated. 

//TODO: Make the getDescritpion and cost method abstract. Rationale: If i want different logi c it will be difficult to add. Which is the purpose of the decorator pattern. 
export default abstract class CondimentDecorator implements Beverage {
  bev: Beverage;
  description: string = "unknown condiment";
  itemCost: number = 0;

  constructor(bev: Beverage) {
    this.bev = bev;
  }
  getDescription(): String {
    return this.bev.getDescription() + ', ' + this.description;
  }

  cost(): number {
    return this.bev.cost() + this.itemCost;
  }

}