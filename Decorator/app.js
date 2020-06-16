"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InEspresso_1 = __importDefault(require("./Component/InEspresso"));
var InMocha_1 = __importDefault(require("./Decorator/InMocha"));
var bev = new InEspresso_1.default();
console.log(bev.getDescription());
console.log(bev.cost());
bev = new InMocha_1.default(bev);
console.log(bev.getDescription());
console.log(bev.cost());
bev = new InMocha_1.default(bev);
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
