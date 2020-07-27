import Command from "./Command";
import Stereo from "../Receivers/Stereo";

export default class StereoOffWithCD implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}