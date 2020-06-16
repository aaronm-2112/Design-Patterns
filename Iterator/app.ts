//Use an iterator to traverse and access menu items from a pancake house and a diner using a waitress class to print menu items.
import Waitress from './Waitress';
import PancakeHouseMenu from './PancackeHouseMenu';
import DinerMenu from './DinerMenu';
import Iterator from './IIterator';

//create the menus the waitress will print
let breakfastMenu: PancakeHouseMenu = new PancakeHouseMenu();
let dinerMenu: DinerMenu = new DinerMenu();
//create the waitress and pass in the menus the class needs to print 
let waitress: Waitress = new Waitress(breakfastMenu, dinerMenu);


//print the menu using the iterators 
waitress.printMenu();

// Woo woo 
