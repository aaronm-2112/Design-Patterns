"use strict";
//Purpose: Represent the sold out state of the gumball machine -- when there are no more gumballs.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = __importDefault(require("./State"));
var SoldState = /** @class */ (function (_super) {
    __extends(SoldState, _super);
    function SoldState(machine) {
        return _super.call(this, machine) || this;
    }
    //default quarter insertion behaviour -- cannot insert quarter while getting a gumball 
    //default eject quarter behaviour -- cannot eject a quarter while getting gumball
    //default turn crank behaviour -- cannot turn crank while getting a gumball
    SoldState.prototype.dispense = function () {
        //release a gumball
        console.log("In sold state");
        this.machine.releaseBall();
        //check if there are any more gumballs
        if (this.machine.getGumballCount() > 0) {
            //if so set to no quarter state so the process can begin again
            this.machine.setState(this.machine.getNoQuarterState());
        }
        else {
            //else set to sold out so no one can insert a quarter or turn the crank
            this.machine.setState(this.machine.getSoldOutState());
        }
    };
    return SoldState;
}(State_1.default));
exports.default = SoldState;
