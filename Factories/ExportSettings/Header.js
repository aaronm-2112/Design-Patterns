"use strict";
// Purpose: A "product" used by the Export object in writing its import. 
// Note: This could be a class but I don't have any real machinery for it.
Object.defineProperty(exports, "__esModule", { value: true });
var Header = /** @class */ (function () {
    function Header() {
        this.length = 0;
        this.fields = [];
    }
    return Header;
}());
exports.default = Header;
