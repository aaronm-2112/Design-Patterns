import MenuComponent from './MenuComponent';
import Iterator from './Iterator';
import NullIterator from './NullIterator';

//Represents leaf nodes in the composite. Leaf operations work, parent node operations throw an exception.
export default class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }
  //Leaf operations

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }

  print(): void {
    if (this.isVegetarian()) {
      console.log("Vegetarian dish:");
    }
    console.log(`${this.name}; ${this.description}; ${this.price};`);
  }

  createIterator(): Iterator {
    //when this hasNext is called it always returns false as there isn't a next in a menuitem (since it is a leaf node in the composite structure)
    return new NullIterator();
  }

}
