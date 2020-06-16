//Purpose: An observer that displays weather data after being updated by the weatherdata subject with new weather data.
import IObserver from './Observer';
import IDisplay from '../Display/DisplayElement';
import ISubject from '../Subject/Subject';

export default class CurrentConditionsDisplay implements IObserver, IDisplay {
  private temp: number = 0;
  private humidity: number = 0;
  private weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this); // double check this part since this in js has some gotchas
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.display(); //location can eventually be better
  }

  display() {
    console.log(`Current conditions! Temperature is ${this.temp} and humidity is ${this.humidity}`);
  }
}