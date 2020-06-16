"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData_1 = __importDefault(require("../Subject/WeatherData"));
var CurrentConditionsPull = /** @class */ (function () {
    function CurrentConditionsPull(weatherData) {
        this.temp = 0;
        this.pressure = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionsPull.prototype.update = function (subject) {
        if (subject instanceof WeatherData_1.default) {
            var weatherDataSub = subject;
            this.humidity = weatherDataSub.getHumidity();
            this.temp = weatherDataSub.getTemperature();
            this.pressure = weatherDataSub.getPressure();
        }
        this.Display();
    };
    CurrentConditionsPull.prototype.Display = function () {
        console.log("Pull Pattern Output: ");
        console.log("Humidity: " + this.humidity + ". Temperature: " + this.temp + ". Pressure: " + this.pressure);
    };
    return CurrentConditionsPull;
}());
exports.default = CurrentConditionsPull;
