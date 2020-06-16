import MenuItem from './MenuItem';

export default interface Iterator {
  next(): MenuItem;
  hasNext(): boolean;
  remove(): MenuItem;
}