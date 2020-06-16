
//Implementation one: Using inheritance.
import InBeverage from './Component/InBeverage';
import InEspresso from './Component/InEspresso';
import InCondimentDecorator from './Decorator/InCondimentDecorator';
import InMocha from './Decorator/InMocha';


let bev: InBeverage = new InEspresso();
console.log(bev.getDescription());
console.log(bev.cost());

bev = new InMocha(bev);
console.log(bev.getDescription());
console.log(bev.cost());

bev = new InMocha(bev);
console.log(bev.getDescription());
console.log(bev.cost());

//Implementation two: Using intefaces and a different structure in condiment decorator. Not quite right.
// import Beverage from "./Component/Beverage";
// import Espresso from "./Component/Espresso";
// import CondimentDecorator from './Decorator/CondimentDecorator';
// import Whip from './Decorator/Whip';
// import Mocha from './Decorator/Mocha';


// let espress: Beverage = new Espresso();
// espress = new Whip(espress);

// console.log(espress.getDescription());
// espress = new Mocha(espress);
// console.log(espress.getDescription());
// console.log(espress.cost())
// espress = new Whip(espress);
// console.log(espress.cost());
// console.log(espress.getDescription());



