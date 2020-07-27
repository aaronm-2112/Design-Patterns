//Purpose: Utilize a template method for outlining the steps in an algorithm for brewing a ceffeinated beverage.

import CaffeinatedBeverage from './templateclass/CaffeineBeverage';
import Coffee from './Coffee';
import Tea from './Tea';
import TeaHook from './TeaHook';


//create the coffee caffeineated beverage subtype
let coffee: CaffeinatedBeverage = new Coffee();

//create the tea subtype
let tea: CaffeinatedBeverage = new Tea();

//use the prepareRecipe method
coffee.prepareRecipe();
tea.prepareRecipe();

//utilize the hook
console.log("Hook with tea class: ")
let hookTea: CaffeinatedBeverage = new TeaHook()
hookTea.prepareRecipe();
