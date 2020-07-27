"use strict";
//Purpose: Compose the light object into the LightOnCommand. This allows the remote to use the light without being coupled to the concrete implementation and to instead depend upon the command interface.
Object.defineProperty(exports, "__esModule", { value: true });
var LightOnCommand = /** @class */ (function () {
    //allows us to choose which kind of light class we want to pass in at runtime (if we were to have a light interface--which we don't)
    function LightOnCommand(light) {
        this.light = light;
    }
    //turn the light on
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    //undo the light on command 
    LightOnCommand.prototype.undo = function () {
        this.light.off();
    };
    return LightOnCommand;
}());
exports.default = LightOnCommand;
