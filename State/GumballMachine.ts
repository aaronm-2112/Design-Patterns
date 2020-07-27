import State from './States/State';
import SoldOutState from './States/SoldOutState';
import SoldState from './States/SoldState';
import HasQuarterState from './States/HasQuarterState';
import WinnerState from './States/WinnerState';
import NoQuarterState from './States/NoQuarterState';


export default class GumballMachine {
  private state: State;
  private Sold: State;
  private SoldOut: State;
  private HasQuarter: State;
  private Winner: State;
  private NoQuarter: State;

  private gumballCount: number;

  constructor(gumballs: number) {
    //instantiate the states
    this.Sold = new SoldState(this);
    this.SoldOut = new SoldOutState(this);
    this.HasQuarter = new HasQuarterState(this);
    this.Winner = new WinnerState(this);
    this.NoQuarter = new NoQuarterState(this);

    //set gumball count
    this.gumballCount = gumballs;

    //set starting state based off gumball count
    if (gumballs > 0) {
      this.state = this.NoQuarter;
    } else {
      this.state = this.SoldOut;
    }
  }

  //gumball machine actions -- all behaviour for each action is dictated by the current state of the gumball machine
  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
  }

  //do not have to check if out of gumballs because state will be selected when this is the case. Impossible to release ball when no balls left. 
  public releaseBall(): void {
    console.log("A gumball comes rolling out the slot");
    if (this.gumballCount !== 0) {
      this.gumballCount -= 1;
    }
  }


  public setState(gumballMachineState: State): void {
    this.state = gumballMachineState;
  }



  //getters so the State objects can set the gumball machine's state without being coupled to other states
  public getSoldState(): State {
    return this.Sold;
  }

  public getSoldOutState(): State {
    return this.SoldOut;
  }

  public getHasQuarterState(): State {
    return this.HasQuarter;
  }

  public getNoQuarterState(): State {
    return this.NoQuarter;
  }

  public getWinnerState(): State {
    return this.Winner;
  }

  public getGumballCount(): number {
    return this.gumballCount;
  }

}