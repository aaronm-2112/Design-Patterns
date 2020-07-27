"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Purpose: Test run the command pattern code
//This pattern is good for decoupling the the object with the logic (the receiver) from the object that wants to invoke that logic(the invoker). 
//One con is that there will be lots of command classes when using the command pattern.  This can be sidestepped with lambda(or arrow functions in javascript) functions.
var RemoteControl_1 = __importDefault(require("./Invoker/RemoteControl"));
var LightOnCommand_1 = __importDefault(require("./CommandObjects/LightOnCommand"));
var Light_1 = __importDefault(require("./Receivers/Light"));
var Stereo_1 = __importDefault(require("./Receivers/Stereo"));
var StereoOnWithCDCommand_1 = __importDefault(require("./CommandObjects/StereoOnWithCDCommand"));
var LightOffCommand_1 = __importDefault(require("./CommandObjects/LightOffCommand"));
var StereoOffWithCD_1 = __importDefault(require("./CommandObjects/StereoOffWithCD"));
var MacroCommand_1 = __importDefault(require("./CommandObjects/MacroCommand"));
var FunctionalRemoteControl_1 = __importDefault(require("./FunctionalCommand/FunctionalRemoteControl"));
//create the receiver and the command objects
var light = new Light_1.default();
var lightOnCommand = new LightOnCommand_1.default(light);
var lightOffCommand = new LightOffCommand_1.default(light);
var stereo = new Stereo_1.default();
var stereoOnCommand = new StereoOnWithCDCommand_1.default(stereo);
var stereoOffCommand = new StereoOffWithCD_1.default(stereo);
//create the remote
var remote = new RemoteControl_1.default();
//set the commands
remote.setCommand(0, lightOnCommand, lightOffCommand);
remote.setCommand(1, stereoOnCommand, stereoOffCommand);
//activate the remote commands
remote.onButtonWasPressed(0);
remote.offButtonWasPushed(0);
remote.onButtonWasPressed(1);
remote.offButtonWasPushed(1);
remote.onButtonWasPressed(2);
//undo testing
remote.onButtonWasPressed(0);
remote.undoPreviousCommand();
//test macro commands
console.log("Macro commands:");
var onMacro = new MacroCommand_1.default([lightOnCommand, stereoOnCommand]);
var offMacro = new MacroCommand_1.default([lightOffCommand, stereoOffCommand]);
remote.setCommand(2, onMacro, offMacro);
remote.onButtonWasPressed(2);
remote.undoPreviousCommand();
//Arrow/lambda functions to circumvent creating command classes -- which can be very numerous and hard to maintain
console.log("Functional remote methods:");
var functionalRemote = new FunctionalRemoteControl_1.default();
functionalRemote.setCommand(0, function () { light.on(); }, function () { light.off(); });
functionalRemote.onButtonWasPressed(0);
