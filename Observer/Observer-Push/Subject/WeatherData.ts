// purpose: A weatherdata object that implements the Subject interface.
import ISubject from './Subject';
import IObserver from '../Observer/Observer';

export default class WeatherData implements ISubject {

  private Observers: Array<IObserver> = [];

  private temp: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;


  public setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  public registerObserver(observer: IObserver): void {
    this.Observers.push(observer);
  }
  public removeObserver(observer: IObserver): void {
    this.Observers = this.Observers.filter(obs => {
      obs !== observer;
    })
  }
  public notifyObservers(): void {
    this.Observers.forEach(obs => {
      obs.update(this.temp, this.humidity, this.pressure);
    })
  }


}