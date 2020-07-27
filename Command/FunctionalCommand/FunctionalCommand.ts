//Purpose: An alternate implementation of the command pattern is to use functional interfaces (interfaces with just one method) and lambda expressions as replacements for command objects. 

export default interface FunctionalCommand {
  //execute function required
  (): void;
}