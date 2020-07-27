//Purpose: Provide an interface for an observer to implement. 
//Note:    Uses the pull method. A subject is passed into the object implementing the observer interface, and uses that objects public methods directly to update its own properties. 
import ISubject from '../Subject/Subject';

export default interface IObserver {
  update(subject: ISubject): void;
}

