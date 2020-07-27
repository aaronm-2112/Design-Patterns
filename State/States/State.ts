//Purpose: The State interface represents the possible actions that can be taken from any of the gumball machine's states.
//         Base implementation is used to handle default behaviour that occurs when an action is not possible.

import GumballMachine from "../GumballMachine";

export default abstract class State {

  protected machine: GumballMachine;

  constructor(machine: GumballMachine) {
    this.machine = machine;
  }

  insertQuarter(): void {
    console.log("Cannot insert a quarter at this time.");
  }

  ejectQuarter(): void {
    console.log("There is no quarter to eject.");
  }

  turnCrank(): void {
    console.log("Cannot turn the crank.");
  }

  dispense(): void {
    console.log("Out of gumballs.");
  }
}