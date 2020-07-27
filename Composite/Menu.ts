//Interface for all menus
import Iterator from './Iterator';
import MenuComponent from './MenuComponent';
import MenuComponentIterator from './MenuComponentterator';

//The composite/parent node of our menu and menu item composite. Supports 
export default class Menu extends MenuComponent {
  menuComponents: MenuComponent[];
  name: string;
  description: string;

  //the constructor allows the client to name their menu and give a quick description of it. 
  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
    this.menuComponents = [];
  }

  print(): void {
    console.log(`${this.name}; ${this.description}`);
    //print out all of the items in the menuComponents array
    let iterator: Iterator = this.createIterator();
    while (iterator.hasNext()) {
      let menuComponent: MenuComponent = iterator.next();
      menuComponent.print();
    }
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.name;
  }

  addItem(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    this.menuComponents = this.menuComponents.filter(component => {
      component != menuComponent;
    });
  }

  getChild(position: number): MenuComponent {
    return this.menuComponents[position];
  }

  //TODO: Check for correctness -- could be less coupled to MenuComponent potentially 
  createIterator(): Iterator {
    let iterator: Iterator = new MenuComponentIterator(this.menuComponents); //concretion in class
    return iterator;
  }
}