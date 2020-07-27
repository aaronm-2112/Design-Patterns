"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stereo = /** @class */ (function () {
    function Stereo() {
        this.volume = 0;
    }
    Stereo.prototype.on = function () {
        console.log("Stereo is on!");
    };
    Stereo.prototype.setCD = function () {
        console.log("CD is set!");
    };
    Stereo.prototype.setVolume = function (volume) {
        this.volume = volume;
        console.log("Volume is set to " + this.volume);
    };
    Stereo.prototype.off = function () {
        console.log("Stereo is now off!");
    };
    return Stereo;
}());
exports.default = Stereo;
