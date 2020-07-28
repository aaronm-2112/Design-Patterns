import State from "./State";
import GumballMachine from "../GumballMachine";

export default class WinnerState extends State {

  constructor(machine: GumballMachine) {
    super(machine);
  }

  //no insertion to do

  //no quarter ejection to do

  //no crank turning to do


  dispense(): void {
    this.machine.releaseBall();

    if (this.machine.getGumballCount() === 0) {
      this.machine.setState(this.machine.getSoldOutState());
    } else {
      console.log("Youre a winner baby");
      this.machine.releaseBall();
      if (this.machine.getGumballCount() > 0) {
        this.machine.setState(this.machine.getNoQuarterState());
      } else {
        console.log("Out of gumballs baby");
        this.machine.setState(this.machine.getSoldOutState());
      }
    }
  }
}