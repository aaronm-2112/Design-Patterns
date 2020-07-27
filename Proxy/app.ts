//Example from refactoring.guru on the Proxy pattern

//Purpose: Mock a basic Proxy pattern that adds caching functionality to a 3rd party library. In short this is the primary intent of the proxy class -- to add functionality without changing the original class and to manage the lifecycle of its service objects.

//How: A proxy class implements the same interface/extends the class of a service(which can be a 3rd party object for instance) but provides additional functionality. All clients get passed the Proxy instead of the 3rd party service. 

//This is just one use of a proxy class. There are many more applications. 

import IYT from './IYT';
import YT from './YT';
import PYT from './ProxyYT';
import YTM from './YTManager';

let ytService: IYT = new YT();
let ytProxy: PYT = new PYT(ytService);
let manager: YTM = new YTM(ytProxy);
manager.userInput(4); 
