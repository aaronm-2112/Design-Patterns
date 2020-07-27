import Iterator from './Iterator';
import MenuComponent from './MenuComponent';

//Iterates through menu component
export default class MenuComponentIterator implements Iterator {

  private menuItems: MenuComponent[];
  private menuPosition: number;

  constructor(items: MenuComponent[]) {
    this.menuItems = items;
    this.menuPosition = 0;
  }

  hasNext(): boolean {
    if (this.menuPosition > this.menuItems.length || this.menuItems[this.menuPosition] === undefined || this.menuItems[this.menuPosition] === null) {
      return false;
    }

    return true;
  }

  next(): MenuComponent {
    let item: MenuComponent = this.menuItems[this.menuPosition];
    this.menuPosition += 1;
    return item;
  }

  remove(): MenuComponent {
    throw new Error();
  }
}