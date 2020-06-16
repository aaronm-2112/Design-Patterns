//Interface for all menus
import Iterator from './IIterator';

export default interface Menu {
  addItem(name: string, description: string, vegetarian: boolean, price: number): void;
  createIterator(): Iterator;
}