//Purpose: The interface for command objects. These objects compose a receiver and execute some of its logic. 

export default interface Command {
  execute(): void; //execute an action
  undo(): void; //undo previous action
}