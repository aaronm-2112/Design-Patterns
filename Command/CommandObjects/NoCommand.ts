//Purpose: Use null object pattern in the remote so the client doesn't have to deal with errors from executing a button that isn't set to a command object. 

import Command from "./Command";

export default class NoCommand implements Command {
  execute(): void {
    console.log("Nothing programmed into this slot");
  }

  undo(): void {
    console.log("Nothing prorgammed into this slot");
  }
}