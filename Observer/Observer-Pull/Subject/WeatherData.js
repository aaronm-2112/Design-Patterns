"use strict";
//Purpose: An object that implements the Subject interface. Notifies its observers when it has a change in its property data.
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherDataPull = /** @class */ (function () {
    function WeatherDataPull() {
        this.temp = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.observers = [];
        this.state = 10;
    }
    WeatherDataPull.prototype.setMeasurements = function (temp, humidity, pressure) {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    WeatherDataPull.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    // the public getters used by the observers to "pull" data from this Subject
    WeatherDataPull.prototype.getTemperature = function () {
        return this.temp;
    };
    WeatherDataPull.prototype.getPressure = function () {
        return this.pressure;
    };
    WeatherDataPull.prototype.getHumidity = function () {
        return this.humidity;
    };
    WeatherDataPull.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherDataPull.prototype.deleteObserver = function (observer) {
        this.observers = this.observers.filter(function (obs) {
            obs !== observer;
        });
    };
    // Where the "pull" begins. The subject is passed into the observers' update method. This subject's getters are used to acquire 
    // the properties the observer is interested in. 
    WeatherDataPull.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (obs) {
            obs.update(_this);
        });
    };
    return WeatherDataPull;
}());
exports.default = WeatherDataPull;
