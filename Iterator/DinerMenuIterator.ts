import Iterator from './IIterator';
import MenuItem from './MenuItem';

export default class DinerMenuIterator implements Iterator {
  dinerMenuItems: Array<MenuItem>;
  menuPosition: number = 0;

  constructor(dinerMenuItems: Array<MenuItem>) {
    this.dinerMenuItems = dinerMenuItems;
  }

  // returns the next item in the menu
  next(): MenuItem {
    let menuItem: MenuItem = this.dinerMenuItems[this.menuPosition];
    this.menuPosition += 1;
    return menuItem;
  }

  // checks if there is another menu item to return to the client. Used before calling next
  hasNext(): boolean {
    if (this.menuPosition >= this.dinerMenuItems.length || this.dinerMenuItems[this.menuPosition] === null || this.dinerMenuItems[this.menuPosition] === undefined) {
      return false;
    } else {
      return true;
    }
  }

  //not supporting for this menu
  remove(): MenuItem {
    throw new Error();
  }
}