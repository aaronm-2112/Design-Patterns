import State from "./State";
import GumballMachine from "../GumballMachine";

export default class HasQuarterState extends State {

  constructor(machine: GumballMachine) {
    super(machine);
  }

  //default insert quarter behaviour -- cannot insert when a quarter is already in the slot

  ejectQuarter(): void {
    //take the quater out of the machine
    console.log("Quarter has been ejected from the slot.");
    //change to the gumball machine quarterless state
    this.machine.setState(this.machine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log("Quarter accepted.");
    //change state to sold state
    this.machine.setState(this.machine.getSoldState());
  }

  //default dispense behaviour -- cannot dispense from this state
}