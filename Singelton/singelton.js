"use strict";
//Purpose: Create an object that can only be instantiated once. Since there aren't threads in the multi-threading sense,
//         the singleton implementation will not need to be thread safe. 
Object.defineProperty(exports, "__esModule", { value: true });
var singleton = /** @class */ (function () {
    // prevent user from creating a new object
    function singleton() {
        this.flagOne = false;
        this.flagTwo = false;
    }
    //only way to get the object instance 
    singleton.getInstance = function () {
        return this.uniqueInstance;
    };
    //various methods the object has 
    singleton.prototype.setFlagOne = function (value) {
        this.flagOne = value;
    };
    singleton.prototype.setFlagTwo = function (value) {
        this.flagTwo = value;
    };
    singleton.prototype.getFlagOne = function () {
        return this.flagOne;
    };
    singleton.prototype.getFlagTwo = function () {
        return this.flagTwo;
    };
    // can only be one of these. "Eager Instantiation" method
    singleton.uniqueInstance = new singleton();
    return singleton;
}());
exports.default = singleton;
