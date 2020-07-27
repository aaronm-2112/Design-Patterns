import Amplifier from './Subsytems/Amplifier'
import Projector from './Subsytems/Projector'
import Screen from './Subsytems/Screen'
import PopcornPopper from './Subsytems/PopcornPopper'


export default class TheaterSystem {
  //compose the subsytem within the facade 
  private amp: Amplifier;
  private Proj: Projector;
  private screen: Screen;
  private popper: PopcornPopper;

  constructor() {
    this.amp = new Amplifier();
    this.Proj = new Projector();
    this.screen = new Screen();
    this.popper = new PopcornPopper();
  }

  //a simple UI for playing a movie where all the subsytems involved in the task are hidden away from the user
  public playMovie(): void {
    //turn on the screen
    this.screen.on();
    //turn on the amp
    this.amp.on();
    //set the volume
    this.amp.setVolume(20);
    //start the projector 
    this.Proj.on();
    //start the popcorn machine
    this.popper.on();
    //begin popping
    this.popper.pop();
    //set a movie and play the DVD
  }
}