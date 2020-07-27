"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//purpose: Allows us to 
var NullIterator = /** @class */ (function () {
    function NullIterator() {
    }
    //Question: null will never occur? Hasnext will prevent us from ever iterating into a nulliterator and calling next
    NullIterator.prototype.next = function () {
        throw new Error("Unsupported operation");
    };
    NullIterator.prototype.hasNext = function () {
        return false;
    };
    NullIterator.prototype.remove = function () {
        throw new Error("Unsupported operation");
    };
    return NullIterator;
}());
exports.default = NullIterator;
