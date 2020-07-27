"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StereoOffWithCD = /** @class */ (function () {
    function StereoOffWithCD(stereo) {
        this.stereo = stereo;
    }
    StereoOffWithCD.prototype.execute = function () {
        this.stereo.off();
    };
    StereoOffWithCD.prototype.undo = function () {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    };
    return StereoOffWithCD;
}());
exports.default = StereoOffWithCD;
