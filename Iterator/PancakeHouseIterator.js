"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PancakeHouseIterator = /** @class */ (function () {
    function PancakeHouseIterator(pancakeHouseMenuItems) {
        this.menuPosition = 0;
        this.breakfastMenuItems = pancakeHouseMenuItems;
    }
    // returns the next item in the menu
    PancakeHouseIterator.prototype.next = function () {
        var menuItem = this.breakfastMenuItems[this.menuPosition];
        this.menuPosition += 1;
        return menuItem;
    };
    // checks if there is another menu item to return to the client. Used before calling next
    PancakeHouseIterator.prototype.hasNext = function () {
        if (this.menuPosition >= this.breakfastMenuItems.length || this.breakfastMenuItems[this.menuPosition] === null) {
            return false;
        }
        else {
            return true;
        }
    };
    return PancakeHouseIterator;
}());
exports.default = PancakeHouseIterator;
