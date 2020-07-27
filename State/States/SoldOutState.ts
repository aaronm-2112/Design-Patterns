import State from "./State";
import GumballMachine from "../GumballMachine";

export default class SoldOutState extends State {

  constructor(machine: GumballMachine) {
    super(machine);
  }

  //insert quarter default behaviour. No reason to allow user ot insert a quarter

  //eject default behaviour. No reason to eject a quarter.

  //default crank behaviour -- no reason to turn crank. it does nothing.

  //default dispense behaviour -- nothing to dispense
}