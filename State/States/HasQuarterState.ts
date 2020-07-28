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
    console.log("You turned....");
    //change state to sold state
    let winner: number = Math.random() * 100;
    console.log(winner);
    if (winner >= 0 && winner <= 10) { //arbitrary 10% chance range
      if (this.machine.getGumballCount() > 1) {
        console.log("More than one gumball! Moving to winner state!");
        this.machine.setState(this.machine.getWinnerState());
      }
    } else {
      console.log("Moving to sold state");
      this.machine.setState(this.machine.getSoldState());
    }

  }

  //default dispense behaviour -- cannot dispense from this state
}