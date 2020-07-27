"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Iterates through menu component
var MenuComponentIterator = /** @class */ (function () {
    function MenuComponentIterator(items) {
        this.menuItems = items;
        this.menuPosition = 0;
    }
    MenuComponentIterator.prototype.hasNext = function () {
        if (this.menuPosition > this.menuItems.length || this.menuItems[this.menuPosition] === undefined || this.menuItems[this.menuPosition] === null) {
            return false;
        }
        return true;
    };
    MenuComponentIterator.prototype.next = function () {
        var item = this.menuItems[this.menuPosition];
        this.menuPosition += 1;
        return item;
    };
    MenuComponentIterator.prototype.remove = function () {
        throw new Error();
    };
    return MenuComponentIterator;
}());
exports.default = MenuComponentIterator;
