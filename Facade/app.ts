//Purpose: A facade is a design pattern that is implented when you want to hide the complexity of a subsytem to a client by providing a simplified interface to control the subsytem.

import TheaterSystem from "./Facade";

//create the facade
let homeTheater: TheaterSystem = new TheaterSystem();

//play a movie
homeTheater.playMovie(); 