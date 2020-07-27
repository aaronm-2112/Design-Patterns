import State from "./State";
import GumballMachine from "../GumballMachine";

export default class WinnerState extends State {

  constructor(machine: GumballMachine) {
    super(machine);
  }

  insertQuarter(): void { }
  ejectQuarter(): void { }
  turnCrank(): void { }
  dispense(): void { }
}