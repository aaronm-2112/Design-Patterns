"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoldOutState_1 = __importDefault(require("./States/SoldOutState"));
var SoldState_1 = __importDefault(require("./States/SoldState"));
var HasQuarterState_1 = __importDefault(require("./States/HasQuarterState"));
var WinnerState_1 = __importDefault(require("./States/WinnerState"));
var NoQuarterState_1 = __importDefault(require("./States/NoQuarterState"));
var GumballMachine = /** @class */ (function () {
    function GumballMachine(gumballs) {
        //instantiate the states
        this.Sold = new SoldState_1.default(this);
        this.SoldOut = new SoldOutState_1.default(this);
        this.HasQuarter = new HasQuarterState_1.default(this);
        this.Winner = new WinnerState_1.default(this);
        this.NoQuarter = new NoQuarterState_1.default(this);
        //set gumball count
        this.gumballCount = gumballs;
        //set starting state based off gumball count
        if (gumballs > 0) {
            this.state = this.NoQuarter;
        }
        else {
            this.state = this.SoldOut;
        }
    }
    //gumball machine actions -- all behaviour for each action is dictated by the current state of the gumball machine
    GumballMachine.prototype.insertQuarter = function () {
        this.state.insertQuarter();
    };
    GumballMachine.prototype.ejectQuarter = function () {
        this.state.ejectQuarter();
    };
    GumballMachine.prototype.turnCrank = function () {
        this.state.turnCrank();
        this.state.dispense();
    };
    //do not have to check if out of gumballs because state will be selected when this is the case. Impossible to release ball when no balls left. 
    GumballMachine.prototype.releaseBall = function () {
        console.log("A gumball comes rolling out the slot");
        if (this.gumballCount !== 0) {
            this.gumballCount -= 1;
        }
    };
    GumballMachine.prototype.setState = function (gumballMachineState) {
        this.state = gumballMachineState;
    };
    //getters so the State objects can set the gumball machine's state without being coupled to other states
    GumballMachine.prototype.getSoldState = function () {
        return this.Sold;
    };
    GumballMachine.prototype.getSoldOutState = function () {
        return this.SoldOut;
    };
    GumballMachine.prototype.getHasQuarterState = function () {
        return this.HasQuarter;
    };
    GumballMachine.prototype.getNoQuarterState = function () {
        return this.NoQuarter;
    };
    GumballMachine.prototype.getWinnerState = function () {
        return this.Winner;
    };
    GumballMachine.prototype.getGumballCount = function () {
        return this.gumballCount;
    };
    return GumballMachine;
}());
exports.default = GumballMachine;
