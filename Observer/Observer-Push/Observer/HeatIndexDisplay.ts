import IObserver from './Observer';
import IDisplay from '../Display/DisplayElement';
import ISubject from '../Subject/Subject';

export default class HeatIndex implements IObserver, IDisplay {

  private temp: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private heatIndex: number = 0;
  private weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    //not actual heatindex formula
    this.heatIndex = temp / humidity;
    this.display(); //location can eventually be better
  }

  display() {
    console.log(`Heat index is: ${this.heatIndex}`);
  }
}