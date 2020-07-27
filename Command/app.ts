//Purpose: Test run the command pattern code
//This pattern is good for decoupling the the object with the logic (the receiver) from the object that wants to invoke that logic(the invoker). 
//One con is that there will be lots of command classes when using the command pattern.  This can be sidestepped with lambda(or arrow functions in javascript) functions.
import Remote from './Invoker/RemoteControl';
import LightOnCommand from './CommandObjects/LightOnCommand';
import Light from './Receivers/Light';
import Stereo from './Receivers/Stereo';
import StereoOnWithCD from './CommandObjects/StereoOnWithCDCommand';
import LightOffCommand from './CommandObjects/LightOffCommand';
import StereoOffWithCD from './CommandObjects/StereoOffWithCD';
import MacroCommand from './CommandObjects/MacroCommand';
import FunctionalRemoteControl from './FunctionalCommand/FunctionalRemoteControl';

//create the receiver and the command objects
let light: Light = new Light();
let lightOnCommand: LightOnCommand = new LightOnCommand(light);
let lightOffCommand: LightOffCommand = new LightOffCommand(light);

let stereo: Stereo = new Stereo();
let stereoOnCommand: StereoOnWithCD = new StereoOnWithCD(stereo);
let stereoOffCommand: StereoOffWithCD = new StereoOffWithCD(stereo);

//create the remote
let remote: Remote = new Remote();

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
let onMacro: MacroCommand = new MacroCommand([lightOnCommand, stereoOnCommand]);
let offMacro: MacroCommand = new MacroCommand([lightOffCommand, stereoOffCommand]);
remote.setCommand(2, onMacro, offMacro);
remote.onButtonWasPressed(2);
remote.undoPreviousCommand();


//Arrow/lambda functions to circumvent creating command classes -- which can be very numerous and hard to maintain
console.log("Functional remote methods:");
let functionalRemote = new FunctionalRemoteControl();

functionalRemote.setCommand(0, () => { light.on() }, () => { light.off() });
functionalRemote.onButtonWasPressed(0);