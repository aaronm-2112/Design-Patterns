import State from "./State";
import GumballMachine from "../GumballMachine";

export default class NoQuarterState extends State {

  constructor(machine: GumballMachine) {
    super(machine);
  }

  insertQuarter(): void {
    console.log("You inserted a quarter");
    //gumball machine now has a quarter
    this.machine.setState(this.machine.getHasQuarterState());
  }

  //default eject quarter behaviour

  //default turncrank behaviour

  //default dispense behaviour

}