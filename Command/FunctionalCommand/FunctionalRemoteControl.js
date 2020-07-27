"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FunctionalRemoteControl = /** @class */ (function () {
    function FunctionalRemoteControl() {
        this.onCommands = [];
        this.offCommands = [];
        //assign unassigned slots with a "null" command
        for (var i = 0; i < 7; i++) {
            this.onCommands[i] = function () { };
            this.offCommands[i] = function () { };
        }
    }
    //allow the user to set commands
    FunctionalRemoteControl.prototype.setCommand = function (slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    };
    //activates when a client touches the remote button
    FunctionalRemoteControl.prototype.onButtonWasPressed = function (slot) {
        this.onCommands[slot]();
    };
    FunctionalRemoteControl.prototype.offButtonWasPushed = function (slot) {
        this.offCommands[slot];
    };
    return FunctionalRemoteControl;
}());
exports.default = FunctionalRemoteControl;
