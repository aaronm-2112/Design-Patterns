"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.Observers = [];
        this.temp = 0;
        this.humidity = 0;
        this.pressure = 0;
    }
    WeatherData.prototype.setMeasurements = function (temp, humidity, pressure) {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.registerObserver = function (observer) {
        this.Observers.push(observer);
    };
    WeatherData.prototype.removeObserver = function (observer) {
        this.Observers = this.Observers.filter(function (obs) {
            obs !== observer;
        });
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        this.Observers.forEach(function (obs) {
            obs.update(_this.temp, _this.humidity, _this.pressure);
        });
    };
    return WeatherData;
}());
exports.default = WeatherData;
