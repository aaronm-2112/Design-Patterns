"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StereoOnWithCD = /** @class */ (function () {
    function StereoOnWithCD(stereo) {
        this.stereo = stereo;
    }
    StereoOnWithCD.prototype.execute = function () {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(12);
    };
    StereoOnWithCD.prototype.undo = function () {
        this.stereo.off();
    };
    return StereoOnWithCD;
}());
exports.default = StereoOnWithCD;
