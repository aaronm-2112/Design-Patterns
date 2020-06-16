"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Waitress = /** @class */ (function () {
    function Waitress(breakfastMenu, dinerMenu) {
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
    Waitress.prototype.printMenu = function () {
        //create the iterators
        var breakfastMenuIterator = this.pancakeHouseMenu.createIterator();
        var dinerMenuIterator = this.dinerMenu.createIterator();
        //use the private method to traverse the menu items an print them out.
        this.printMenuItems(breakfastMenuIterator);
        this.printMenuItems(dinerMenuIterator);
    };
    Waitress.prototype.printMenuItems = function (iterator) {
        while (iterator.hasNext()) {
            var menuItem = iterator.next();
            console.log(menuItem.getDescription() + ' ' + menuItem.getName() + ' ' + menuItem.getPrice().toString());
        }
    };
    return Waitress;
}());
exports.default = Waitress;
