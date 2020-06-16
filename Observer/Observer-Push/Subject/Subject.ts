//Purpose: Provides methods for any class implementing the Subject interface to work with any class that has implemented the Observer interface. 
//Note: Does not provide mechanisms for setting thresholds that need to be met before observers are notified. 
import observer from '../Observer/Observer';

export default interface ISubject {
  registerObserver(observer: observer): void;
  removeObserver(observer: observer): void;
  notifyObservers(): void;
}