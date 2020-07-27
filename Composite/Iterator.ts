import MenuComponent from './MenuComponent';
import NullIterator from './NullIterator';

export default interface Iterator {
  next(): MenuComponent;
  hasNext(): boolean;
  remove(): MenuComponent;
}