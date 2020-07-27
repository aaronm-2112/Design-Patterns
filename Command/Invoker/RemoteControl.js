"use strict";
//Purpose: A representation of a universal remote with 7 slots. Utilizes the command pattern in order to decouple the remote control, aka, the initiator from the objects it activates, aka, the receivers.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NoCommand_1 = __importDefault(require("../CommandObjects/NoCommand"));
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.onCommands = [];
        this.offCommands = [];
        //assign unassigned slots with a "null" command
        for (var i = 0; i < 7; i++) {
            this.onCommands[i] = new NoCommand_1.default();
            this.offCommands[i] = new NoCommand_1.default();
        }
        this.undoCommand = new NoCommand_1.default();
    }
    //allow the user to set commands
    RemoteControl.prototype.setCommand = function (slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    };
    //activates when a client touches the remote button
    RemoteControl.prototype.onButtonWasPressed = function (slot) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    };
    RemoteControl.prototype.offButtonWasPushed = function (slot) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    };
    RemoteControl.prototype.undoPreviousCommand = function () {
        this.undoCommand.undo();
    };
    return RemoteControl;
}());
exports.default = RemoteControl;
