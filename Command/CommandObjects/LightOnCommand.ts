//Purpose: Compose the light object into the LightOnCommand. This allows the remote to use the light without being coupled to the concrete implementation and to instead depend upon the command interface.

import Light from "../Receivers/Light";
import Command from "./Command";


export default class LightOnCommand implements Command {
  light: Light;

  //allows us to choose which kind of light class we want to pass in at runtime (if we were to have a light interface--which we don't)
  constructor(light: Light) {
    this.light = light;
  }

  //turn the light on
  public execute(): void {
    this.light.on();
  }

  //undo the light on command 
  public undo(): void {
    this.light.off();
  }
}

