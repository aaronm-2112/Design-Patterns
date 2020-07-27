//A basic amplifier -- imagine as being more complex

export default class Amplifier {

  private volume: number = 0;

  on() {
    console.log("Amplifier is on");
  }

  setVolume(volume: number) {
    this.volume = volume;
  }
}