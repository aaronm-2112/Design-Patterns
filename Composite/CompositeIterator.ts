import Iterator from './Iterator';
import MenuComponent from './MenuComponent';

//Different from MenuComponentIterator as this is an external iterator. 
//It keeps track of its position in the iteration so an external client can use it by using next or hasnext.\
//we use a stack to keep the iterations position over a tree because it lends itself well to doing so. 
export default class CompositeIterator implements Iterator {
  //TODO: Make this an Iterator and make the constructor pass in an iterator
  stack: Array<Iterator> = new Array<Iterator>();

  //a component iterator needs to be passed in. The composite then manages a stack of component iterators. 
  constructor(iterator: Iterator) {
    this.stack.push(iterator);
  }

  next(): MenuComponent {

    //get last element in the stack 
    let compositeIterator: Iterator = this.stack[this.stack.length - 1];

    //get the next item that iterator has stored 
    let component: MenuComponent = compositeIterator.next();

    //push that component's iterator onto the stack 
    this.stack.push(component.createIterator());

    return component;


  }

  hasNext(): boolean {
    if (this.stack.length === 0) {
      return false;
    } else {
      //get last element in the stack 
      let iterator: Iterator = this.stack[this.stack.length - 1];

      if (!iterator.hasNext()) {
        this.stack.pop();
        return this.hasNext();
      } else {
        return true;
      }

    }
  }

  remove(): MenuComponent {
    throw new Error("Unsupported operation");
  }
}