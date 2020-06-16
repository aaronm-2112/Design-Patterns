"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData_1 = __importDefault(require("./Observer-Push/Subject/WeatherData"));
var CurrentConditionsDisplay_1 = __importDefault(require("./Observer-Push/Observer/CurrentConditionsDisplay"));
var HeatIndexDisplay_1 = __importDefault(require("./Observer-Push/Observer/HeatIndexDisplay"));
var WeatherData_2 = __importDefault(require("./Observer-Pull/Subject/WeatherData"));
var CurrentConditionsDisplay_2 = __importDefault(require("./Observer-Pull/Observer/CurrentConditionsDisplay"));
//Purpose: Use the subject, which is the weatherData object and the observer, which is the current conditions display object,
//         to update and display -- with a console.log -- the current weather conditions. This is a push based obsever patttern. 
//         Downside: Whenever I make a change the observer update method need to change. 
//The observer pattern with a push implementation.
// the subject 
var weatherData = new WeatherData_1.default();
// the observer -- automatically gets registered when we pass in weatherData object. Alternatively can register with weatherData directly. 
var CurrentConditionsDisplay = new CurrentConditionsDisplay_1.default(weatherData);
var heatIndex = new HeatIndexDisplay_1.default(weatherData);
weatherData.setMeasurements(10, 12, 13); // current conditions display will log these values
weatherData.setMeasurements(10, 14, 13); // current conditions display will log these values
weatherData.setMeasurements(10, 20, 15); // current conditions display will log these values
//The observer pattern with a pull implementation. 
var weatherDataPull = new WeatherData_2.default();
var currConditions = new CurrentConditionsDisplay_2.default(weatherDataPull);
weatherDataPull.setMeasurements(10, 12, 13);
weatherDataPull.setMeasurements(10, 14, 13);
weatherDataPull.setMeasurements(10, 20, 15);
