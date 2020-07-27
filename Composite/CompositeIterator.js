"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Different from MenuComponentIterator as this is an external iterator. 
//It keeps track of its position in the iteration so an external client can use it by using next or hasnext.\
//we use a stack to keep the iterations position over a tree because it lends itself well to doing so. 
var CompositeIterator = /** @class */ (function () {
    //a component iterator needs to be passed in. The composite then manages a stack of component iterators. 
    function CompositeIterator(iterator) {
        //TODO: Make this an Iterator and make the constructor pass in an iterator
        this.stack = new Array();
        this.stack.push(iterator);
    }
    CompositeIterator.prototype.next = function () {
        //get last element in the stack 
        var compositeIterator = this.stack[this.stack.length - 1];
        //get the next item that iterator has stored 
        var component = compositeIterator.next();
        //push that component's iterator onto the stack 
        this.stack.push(component.createIterator());
        return component;
    };
    CompositeIterator.prototype.hasNext = function () {
        if (this.stack.length === 0) {
            return false;
        }
        else {
            //get last element in the stack 
            var iterator = this.stack[this.stack.length - 1];
            if (!iterator.hasNext()) {
                this.stack.pop();
                return this.hasNext();
            }
            else {
                return true;
            }
        }
    };
    CompositeIterator.prototype.remove = function () {
        throw new Error("Unsupported operation");
    };
    return CompositeIterator;
}());
exports.default = CompositeIterator;
