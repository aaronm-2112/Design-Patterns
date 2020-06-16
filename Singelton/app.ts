//Purpose: Test the singleton pattern. Method used is Eager initialization. Also possible is lazy initialization. 
//         Thread safe versions seemed uncecessary.

import singleton from './singelton';

// grab references to the singleton instance -- both flags are set to false
let singleOne: singleton = singleton.getInstance();
let singleTwo: singleton = singleton.getInstance();


// set both flags to true 
singleOne.setFlagOne(true);
singleTwo.setFlagTwo(true);

//check that both flags are true for both references to make sure it is working properly 
console.log(singleOne.getFlagOne()); //shows true as expected
console.log(singleOne.getFlagTwo()); //also shows true indicating the singleton setup is functioning correctly(only one instance with many references possible)


