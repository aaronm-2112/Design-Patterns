"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DinerMenuIterator = /** @class */ (function () {
    function DinerMenuIterator(dinerMenuItems) {
        this.menuPosition = 0;
        this.dinerMenuItems = dinerMenuItems;
    }
    // returns the next item in the menu
    DinerMenuIterator.prototype.next = function () {
        var menuItem = this.dinerMenuItems[this.menuPosition];
        this.menuPosition += 1;
        return menuItem;
    };
    // checks if there is another menu item to return to the client. Used before calling next
    DinerMenuIterator.prototype.hasNext = function () {
        if (this.menuPosition >= this.dinerMenuItems.length || this.dinerMenuItems[this.menuPosition] === null || this.dinerMenuItems[this.menuPosition] === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return DinerMenuIterator;
}());
exports.default = DinerMenuIterator;
