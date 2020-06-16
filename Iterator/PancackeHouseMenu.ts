import MenuItem from './MenuItem';
import IIterator from './IIterator';
import PancakeHouseIterator from './PancakeHouseIterator';
import Menu from './Menu';

export default class PancakeHouseMenu implements Menu {
  menuItems: MenuItem[] = []; //simulate arraylist

  constructor() {
    this.addItem("Pancake Breakfast", "Pancakes with egss", true, 2.99);
    this.addItem("Blueberry Pancake Breakfast", "Pancakes with blueberries", true, 2.99);

  }

  addItem(name: string, description: string, vegetarian: boolean, price: number): void {
    let menuItem: MenuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  //violates encapsulation
  // getMenuItems(): Array<MenuItem> {
  //   return this.menuItems;
  // }

  //encapsulate array details from client by using an iterator for traversal and access instead of the above method
  createIterator(): IIterator {
    //return the iterator to the user -- encapsulates traversal and item access so client doesn't see those implementation details
    return new PancakeHouseIterator(this.menuItems);[]
  }
}