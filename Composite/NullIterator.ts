import Iterator from './Iterator';
import MenuComponent from './MenuComponent';


//purpose: Allows us to 
export default class NullIterator implements Iterator {
  //Question: null will never occur? Hasnext will prevent us from ever iterating into a nulliterator and calling next
  next(): MenuComponent {
    throw new Error("Unsupported operation");
  }

  hasNext(): boolean {
    return false;
  }

  remove(): MenuComponent {
    throw new Error("Unsupported operation");
  }
}