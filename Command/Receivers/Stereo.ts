
export default class Stereo {

  volume: number = 0;

  on(): void {
    console.log("Stereo is on!");
  }

  setCD(): void {
    console.log("CD is set!");
  }

  setVolume(volume: number): void {
    this.volume = volume;
    console.log(`Volume is set to ${this.volume}`);
  }

  off(): void {
    console.log("Stereo is now off!");
  }
}