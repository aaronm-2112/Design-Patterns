"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.temp = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this); // double check this part since this in js has some gotchas
    }
    CurrentConditionsDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temp = temp;
        this.humidity = humidity;
        this.display(); //location can eventually be better
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current conditions! Temperature is " + this.temp + " and humidity is " + this.humidity);
    };
    return CurrentConditionsDisplay;
}());
exports.default = CurrentConditionsDisplay;
