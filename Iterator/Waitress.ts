import PancakeHouseMenu from './PancackeHouseMenu';
import DinerMenu from './DinerMenu';
import MenuItem from './MenuItem';
import Iterator from './IIterator';
import Menu from './Menu';

export default class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;

  //use an interface and composition to make class more extensible and to not rely upon concretions 
  constructor(breakfastMenu: Menu, dinerMenu: Menu) {
    this.pancakeHouseMenu = breakfastMenu;
    this.dinerMenu = dinerMenu;
  }

  //Done before inclusion of iterator pattern 
  // printMenu(): void {
  //   //create menus
  //   let pancakeMenu: PancakeHouseMenu = new PancakeHouseMenu();
  //   let breakfastItems: MenuItem[] = pancakeMenu.getMenuItems(); //b/c of bad encapsulation we create a concrete dependency  
  //   let dinerMenu: DinerMenu = new DinerMenu();
  //   let dinerItems: Array<MenuItem> = dinerMenu.getMenuItems();//b/c of bad encapsulation we create a concrete dependency


  //   for (let i = 0; i < breakfastItems.length; i++) {
  //     // access ops are also violation of encapsulation
  //     let menuItem: MenuItem = breakfastItems[i];
  //     console.log(menuItem.getDescription() + ' ' + menuItem.getName() + ' ' + menuItem.getPrice().toString());
  //   }

  //   for (let i = 0; i < dinerItems.length; i++) {
  //     let menuItem: MenuItem = dinerItems[i];
  //     console.log(menuItem.getDescription() + ' ' + menuItem.getName() + ' ' + menuItem.getPrice().toString());
  //   }
  // }

  //Iterator pattern version of printmenu -- menu classes retain encapsulation

  printMenu(): void {
    //create the iterators
    let breakfastMenuIterator: Iterator = this.pancakeHouseMenu.createIterator();
    let dinerMenuIterator: Iterator = this.dinerMenu.createIterator();

    //use the private method to traverse the menu items an print them out.
    this.printMenuItems(breakfastMenuIterator);
    this.printMenuItems(dinerMenuIterator);

  }

  private printMenuItems(iterator: Iterator): void { //dependent upon an interface instead of a concretion
    while (iterator.hasNext()) {
      let menuItem: MenuItem = iterator.next();
      console.log(menuItem.getDescription() + ' ' + menuItem.getName() + ' ' + menuItem.getPrice().toString());
    }
  }


}

