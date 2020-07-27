import Light from "../Receivers/Light";
import Command from "./Command";


export default class LightOffCommand implements Command {
  light: Light;

  //allows us to choose which kind of light class we want to pass in at runtime (if we were to have a light interface--which we don't)
  constructor(light: Light) {
    this.light = light;
  }

  //turn the light on
  public execute(): void {
    this.light.off();
  }

  //undo the light on command 
  public undo(): void {
    this.light.on();
  }
}

