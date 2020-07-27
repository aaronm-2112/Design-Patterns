"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MacroCommand = /** @class */ (function () {
    function MacroCommand(commands) {
        this.commands = commands;
    }
    //execute a list of commands from left to right
    MacroCommand.prototype.execute = function () {
        this.commands.forEach(function (command) {
            command.execute();
        });
    };
    //start from last command called and undo that action
    MacroCommand.prototype.undo = function () {
        var i = this.commands.length - 1;
        for (i; i >= 0; i--) {
            this.commands[i].undo();
        }
    };
    return MacroCommand;
}());
exports.default = MacroCommand;
