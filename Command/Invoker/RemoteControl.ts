//Purpose: A representation of a universal remote with 7 slots. Utilizes the command pattern in order to decouple the remote control, aka, the initiator from the objects it activates, aka, the receivers.

import Command from "../CommandObjects/Command";
import NoCommand from '../CommandObjects/NoCommand';

export default class RemoteControl {
  //compose a command object 
  onCommands: Command[];
  offCommands: Command[];

  undoCommand: Command;

  constructor() {
    this.onCommands = [];
    this.offCommands = [];

    //assign unassigned slots with a "null" command
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = new NoCommand();
      this.offCommands[i] = new NoCommand();
    }

    this.undoCommand = new NoCommand();
  }

  //allow the user to set commands
  public setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  //activates when a client touches the remote button
  public onButtonWasPressed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoPreviousCommand(): void {
    this.undoCommand.undo();
  }
}