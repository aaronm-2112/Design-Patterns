// A composite pattern version of what is implemented in the Iterator pattern code
import Menu from './Menu';

export default class Waitress {
  menus: Menu[];

  constructor(menus: Menu[]) {
    this.menus = menus;
  }
}