import Command from './Command';

export default class MacroCommand implements Command {
  commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  //execute a list of commands from left to right
  execute(): void {
    this.commands.forEach(command => {
      command.execute();
    })
  }

  //start from last command called and undo that action
  undo(): void {
    let i: number = this.commands.length - 1;
    for (i; i >= 0; i--) {
      this.commands[i].undo();
    }
  }
}