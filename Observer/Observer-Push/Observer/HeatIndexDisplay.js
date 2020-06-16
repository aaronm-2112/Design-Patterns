"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeatIndex = /** @class */ (function () {
    function HeatIndex(weatherData) {
        this.temp = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.heatIndex = 0;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    HeatIndex.prototype.update = function (temp, humidity, pressure) {
        this.temp = temp;
        this.humidity = humidity;
        //not actual heatindex formula
        this.heatIndex = temp / humidity;
        this.display(); //location can eventually be better
    };
    HeatIndex.prototype.display = function () {
        console.log("Heat index is: " + this.heatIndex);
    };
    return HeatIndex;
}());
exports.default = HeatIndex;
