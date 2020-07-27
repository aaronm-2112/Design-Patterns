"use strict";
//Purpose: Use null object pattern in the remote so the client doesn't have to deal with errors from executing a button that isn't set to a command object. 
Object.defineProperty(exports, "__esModule", { value: true });
var NoCommand = /** @class */ (function () {
    function NoCommand() {
    }
    NoCommand.prototype.execute = function () {
        console.log("Nothing programmed into this slot");
    };
    NoCommand.prototype.undo = function () {
        console.log("Nothing prorgammed into this slot");
    };
    return NoCommand;
}());
exports.default = NoCommand;
