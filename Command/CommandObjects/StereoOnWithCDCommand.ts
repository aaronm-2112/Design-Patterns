import Command from "./Command";
import Stereo from "../Receivers/Stereo";

export default class StereoOnWithCD implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(12);
  }

  undo(): void {
    this.stereo.off();
  }
}