import Iterator from './Iterator';
import MenuItem from './MenuItem';

export default class MenuItemIterator implements Iterator {

  hasNext(): boolean {

  }

  next(): MenuItem {

  }

  remove(): MenuItem {
    throw new Error();
  }
}