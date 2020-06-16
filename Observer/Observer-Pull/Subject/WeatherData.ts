//Purpose: An object that implements the Subject interface. Notifies its observers when it has a change in its property data.

import ISubject from "./Subject";
import IObserver from '../Observer/Observer';

export default class WeatherDataPull implements ISubject {

  private temp: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private observers: Array<IObserver> = [];
  public state: number = 10;


  public setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  // the public getters used by the observers to "pull" data from this Subject
  public getTemperature(): number {
    return this.temp;
  }

  public getPressure(): number {
    return this.pressure;
  }

  public getHumidity(): number {
    return this.humidity;
  }



  registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  deleteObserver(observer: IObserver): void {
    this.observers = this.observers.filter(obs => {
      obs !== observer;
    })
  }

  // Where the "pull" begins. The subject is passed into the observers' update method. This subject's getters are used to acquire 
  // the properties the observer is interested in. 
  notifyObservers(): void {
    this.observers.forEach(obs => {
      obs.update(this);
    })
  }

}