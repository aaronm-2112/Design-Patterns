//Purpose: Create an interface for an observable subject.
import IObserver from '../Observer/Observer';

export default interface ISubject {

  registerObserver(observer: IObserver): void;
  deleteObserver(observer: IObserver): void;
  notifyObservers(): void;
}