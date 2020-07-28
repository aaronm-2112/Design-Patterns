"use strict";
//Purpose: The State interface represents the possible actions that can be taken from any of the gumball machine's states.
//         Base implementation is used to handle default behaviour that occurs when an action is not possible.
Object.defineProperty(exports, "__esModule", { value: true });
var State = /** @class */ (function () {
    function State(machine) {
        this.machine = machine;
    }
    State.prototype.insertQuarter = function () {
        console.log("Cannot insert a quarter at this time.");
    };
    State.prototype.ejectQuarter = function () {
        console.log("There is no quarter to eject.");
    };
    State.prototype.turnCrank = function () {
        console.log("Cannot turn the crank.");
    };
    State.prototype.dispense = function () {
        console.log("Out of gumballs.");
    };
    return State;
}());
exports.default = State;
