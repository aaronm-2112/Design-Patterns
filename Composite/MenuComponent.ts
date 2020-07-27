//Purpose: Interface for the composite menu structure. Operations support menu traversal and actions. This interface is necessary to allow a collection of nodes (leaf and parent nodes) to be treated as a unit, and individually. The Menu and MenuItem classes will implement this interface and be the parent and leaf nodes. Since both classes will be considered a "MenuComponent" they can be treated the same. 


//Why have one class handle two responsibilities?
//A: By allowing the Component interface to contain child management operations and leaf opearqations, a client can treat leaf and composite nodes uniformly; allowing us to avoid uses of instanceof operators and conditionals in our code. This does take away safety, as a client can call unsupported operations on a node. If we separated the responsibility into 2 different classes, our code would be safer, 
//but also more muddled. This is a design tradeoff. In different situation it might be good to separate the responsibilties into 2 different classes if we need more safety over clarity. 

import MenuItem from "./MenuItem";
import { exception } from "console";
import Iterator from "./Iterator";

//Provide default implementation 
export default abstract class MenuComponent {
  //leaf operations
  getName(): string {
    throw exception("Unsupported operation");
  }

  getDescription(): string {
    throw exception("Unsupported operation");
  }

  getPrice(): number {
    throw exception("Unsupported operation");
  }

  isVegetarian(): boolean {
    throw exception("Unsupported operation");
  }

  //parent node operations
  print(): void {
    throw exception("Unsupported operation");
  }

  addItem(menuComponent: MenuComponent): void {
    throw exception("Unsupported operation");
  }
  removeItem(menuComponent: MenuComponent): void {
    throw exception("Unsupported operation");
  }
  getChildItem(position: number): MenuItem {
    throw exception("Unsupported operation");
  }

  //For iterating through menus 
  createIterator(): Iterator {
    throw exception("Unsupported operation");
  }

  //for more specialized iterations through the composite structure 
  createCompositeIterator(): Iterator {
    throw exception("Unsupported operation");
  }
}