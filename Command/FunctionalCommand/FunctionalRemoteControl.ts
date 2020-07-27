import FunctionalCommand from './FunctionalCommand';

export default class FunctionalRemoteControl {
  //compose a command object 
  onCommands: FunctionalCommand[];
  offCommands: FunctionalCommand[];

  constructor() {
    this.onCommands = [];
    this.offCommands = [];

    //assign unassigned slots with a "null" command
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = () => { };
      this.offCommands[i] = () => { };
    }
  }

  //allow the user to set commands
  public setCommand(slot: number, onCommand: FunctionalCommand, offCommand: FunctionalCommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  //activates when a client touches the remote button
  public onButtonWasPressed(slot: number): void {
    this.onCommands[slot]();

  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot];


  }

}