//Purpose: Represent the sold out state of the gumball machine -- when there are no more gumballs.

import State from "./State";
import GumballMachine from "../GumballMachine";

export default class SoldState extends State {

  constructor(machine: GumballMachine) {
    super(machine);
  }

  //default quarter insertion behaviour -- cannot insert quarter while getting a gumball 

  //default eject quarter behaviour -- cannot eject a quarter while getting gumball

  //default turn crank behaviour -- cannot turn crank while getting a gumball

  dispense(): void {
    //release a gumball
    this.machine.releaseBall();
    //check if there are any more gumballs
    if (this.machine.getGumballCount() > 0) {
      //if so set to no quarter state so the process can begin again
      this.machine.setState(this.machine.getNoQuarterState());
    } else {
      //else set to sold out so no one can insert a quarter or turn the crank
      this.machine.setState(this.machine.getSoldOutState());
    }
  }
}