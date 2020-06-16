import IObserver from "./Observer";
import ISubject from "../Subject/Subject";
import WeatherDataPull from "../Subject/WeatherData";
import CurrentConditionsDisplay from "../../Observer-Push/Observer/CurrentConditionsDisplay";

export default class CurrentConditionsPull implements IObserver {

  private temp: number = 0;
  private pressure: number = 0;
  private humidity: number = 0;
  private weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(subject: ISubject): void {
    //Another more robust option is to use a more specific subject class that implements ISubject for all weather station observers
    if (subject instanceof WeatherDataPull) {
      let weatherDataSub: WeatherDataPull = subject as WeatherDataPull;
      this.humidity = weatherDataSub.getHumidity();
      this.temp = weatherDataSub.getTemperature();
      this.pressure = weatherDataSub.getPressure();
    }

    this.Display();
  }

  Display() {
    console.log("Pull Pattern Output: ")
    console.log(`Humidity: ${this.humidity}. Temperature: ${this.temp}. Pressure: ${this.pressure}`);
  }
}