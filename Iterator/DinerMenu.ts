import MenuItem from './MenuItem';
import IIterator from './IIterator';
import DinerMenuIterator from './DinerMenuIterator';
import Menu from './Menu';

export default class DinerMenu implements Menu {
  static MAX_ITEMS: number = 4;
  numberOfItems: number = 0;
  menuItems: Array<MenuItem>; //simulate array 

  constructor() {
    this.menuItems = new Array(DinerMenu.MAX_ITEMS);
    this.addItem("Fake bacon Breakfast", "Vegetarian bacon and eggs", true, 2.99);
    this.addItem("BLT", "Bacon lettuce and tomatoes", false, 2.99);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number): void {
    let menuItem: MenuItem = new MenuItem(name, description, vegetarian, price);
    if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
      console.error("Too many items in the menu.")
    } else {
      this.menuItems[this.numberOfItems] = menuItem;
      this.numberOfItems += 1;
    }
  }

  //encapsulate array details from client by using an iterator for traversal and access instead of the above method
  createIterator(): IIterator {
    //return the iterator to the user -- encapsulates traversal and item access so client doesn't see those implementation details
    return new DinerMenuIterator(this.menuItems);
  }

  // getMenuItems(): Array<MenuItem> {
  //   return this.menuItems;
  // }
}


