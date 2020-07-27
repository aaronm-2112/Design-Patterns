"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LightOffCommand = /** @class */ (function () {
    //allows us to choose which kind of light class we want to pass in at runtime (if we were to have a light interface--which we don't)
    function LightOffCommand(light) {
        this.light = light;
    }
    //turn the light on
    LightOffCommand.prototype.execute = function () {
        this.light.off();
    };
    //undo the light on command 
    LightOffCommand.prototype.undo = function () {
        this.light.on();
    };
    return LightOffCommand;
}());
exports.default = LightOffCommand;
