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
var WinnerState = /** @class */ (function (_super) {
    __extends(WinnerState, _super);
    function WinnerState(machine) {
        return _super.call(this, machine) || this;
    }
    //no insertion to do
    //no quarter ejection to do
    //no crank turning to do
    WinnerState.prototype.dispense = function () {
        this.machine.releaseBall();
        if (this.machine.getGumballCount() === 0) {
            this.machine.setState(this.machine.getSoldOutState());
        }
        else {
            console.log("Youre a winner baby");
            this.machine.releaseBall();
            if (this.machine.getGumballCount() > 0) {
                this.machine.setState(this.machine.getNoQuarterState());
            }
            else {
                console.log("Out of gumballs baby");
                this.machine.setState(this.machine.getSoldOutState());
            }
        }
    };
    return WinnerState;
}(State_1.default));
exports.default = WinnerState;
