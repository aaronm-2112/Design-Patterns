// A composite pattern version of what is implemented in the Iterator pattern code
import MenuComponent from './MenuComponent';
import CompositeIterator from './CompositeIterator';
import Iterator from './Iterator';

export default class Waitress {

  //holds the menus and menuitems 
  menus: MenuComponent;

  //allow for polymorphism 
  constructor(menus: MenuComponent) {
    this.menus = menus;
  }


  printMenu() {
    //traverse the menus 
    this.menus.print();
  }

  printVegetarianMenu(): void {
    let iterator: Iterator = new CompositeIterator(this.menus.createIterator());

    while (iterator.hasNext()) {
      let component: MenuComponent = iterator.next();
      try {
        if (component.isVegetarian()) {
          component.print();
        }
      } catch (e) {
        //console.log(e);
      }
    }
  }
}