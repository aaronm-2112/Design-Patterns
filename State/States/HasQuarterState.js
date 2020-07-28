"use strict";
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
var HasQuarterState = /** @class */ (function (_super) {
    __extends(HasQuarterState, _super);
    function HasQuarterState(machine) {
        return _super.call(this, machine) || this;
    }
    //default insert quarter behaviour -- cannot insert when a quarter is already in the slot
    HasQuarterState.prototype.ejectQuarter = function () {
        //take the quater out of the machine
        console.log("Quarter has been ejected from the slot.");
        //change to the gumball machine quarterless state
        this.machine.setState(this.machine.getNoQuarterState());
    };
    HasQuarterState.prototype.turnCrank = function () {
        console.log("You turned....");
        //change state to sold state
        var winner = Math.random() * 100;
        console.log(winner);
        if (winner >= 0 && winner <= 10) { //arbitrary 10% chance range
            if (this.machine.getGumballCount() > 1) {
                console.log("More than one gumball! Moving to winner state!");
                this.machine.setState(this.machine.getWinnerState());
            }
        }
        else {
            console.log("Moving to sold state");
            this.machine.setState(this.machine.getSoldState());
        }
    };
    return HasQuarterState;
}(State_1.default));
exports.default = HasQuarterState;
