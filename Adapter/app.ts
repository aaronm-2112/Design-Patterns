//Purpose: Use and adapter to make a turkey callable by a duck interface.
import Duck from './Duck';
import MallardDuck from './MallardDuck';
import Turkey from './Turkey';
import TurkeyAdapter from './TurkeyAdapter';

//create the base duck and turkey
let duck: Duck = new MallardDuck();
let turkey: Turkey = new Turkey();


//a function that requires a duck interface 
function duckCalls(duck: Duck) {
  duck.fly();
  duck.quack();
}

duckCalls(duck);
// duckCalls(turkey); --cannot call for turkey

//use the turkey adapter -- it is type duck
let turkeyAdapter: Duck = new TurkeyAdapter(turkey);

duckCalls(turkeyAdapter); //can now use duckCalls