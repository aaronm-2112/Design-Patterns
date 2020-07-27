import WeatherData from './Observer-Push/Subject/WeatherData';
import ConditionsDisplay from './Observer-Push/Observer/CurrentConditionsDisplay';
import HeatIndex from './Observer-Push/Observer/HeatIndexDisplay';
import WeatherDataPull from './Observer-Pull/Subject/WeatherData';
import CurrentConditionsPull from './Observer-Pull/Observer/CurrentConditionsDisplay';

//Purpose: Use the subject, which is the weatherData object and the observer, which is the current conditions display object,
//         to update and display -- with a console.log -- the current weather conditions. This is a push based obsever patttern. 
//         Downside: Whenever I make a change the observer update method need to change. 

//The observer pattern with a push implementation.
// the subject 
let weatherData: WeatherData = new WeatherData();
// the observer -- automatically gets registered when we pass in weatherData object. Alternatively can register with weatherData directly. 
let CurrentConditionsDisplay: ConditionsDisplay = new ConditionsDisplay(weatherData);
let heatIndex: HeatIndex = new HeatIndex(weatherData);

weatherData.setMeasurements(10, 12, 13); // current conditions display will log these values
weatherData.setMeasurements(10, 14, 13); // current conditions display will log these values
weatherData.setMeasurements(10, 20, 15); // current conditions display will log these values

//The observer pattern with a pull implementation. 
let weatherDataPull: WeatherDataPull = new WeatherDataPull();
let currConditions: CurrentConditionsPull = new CurrentConditionsPull(weatherDataPull);

weatherDataPull.setMeasurements(10, 12, 13)
weatherDataPull.setMeasurements(10, 14, 13);
weatherDataPull.setMeasurements(10, 20, 15)



