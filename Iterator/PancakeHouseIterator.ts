import Iterator from './IIterator';
import MenuItem from './MenuItem';


export default class PancakeHouseIterator implements Iterator {
  breakfastMenuItems: MenuItem[];
  menuPosition: number = 0;

  constructor(pancakeHouseMenuItems: MenuItem[]) {
    this.breakfastMenuItems = pancakeHouseMenuItems;
  }

  // returns the next item in the menu
  next(): MenuItem {
    let menuItem: MenuItem = this.breakfastMenuItems[this.menuPosition];
    this.menuPosition += 1;
    return menuItem;

  }

  // checks if there is another menu item to return to the client. Used before calling next
  hasNext(): boolean {
    if (this.menuPosition >= this.breakfastMenuItems.length || this.breakfastMenuItems[this.menuPosition] === null) {
      return false;
    } else {
      return true;
    }
  }

  remove(): MenuItem {
    throw new Error();
  }
}