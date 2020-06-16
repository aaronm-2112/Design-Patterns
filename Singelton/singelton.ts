//Purpose: Create an object that can only be instantiated once. Since there aren't threads in the multi-threading sense,
//         the singleton implementation will not need to be thread safe. 



export default class singleton {
  // can only be one of these. "Eager Instantiation" method
  private static uniqueInstance: singleton = new singleton();

  //used for testing
  private flagOne: Boolean;
  private flagTwo: Boolean;

  // prevent user from creating a new object
  private constructor() {
    this.flagOne = false;
    this.flagTwo = false;
  }

  //only way to get a reference to the single object instance 
  public static getInstance(): singleton { //Optional lazy instantiation is when we instantiate it when this method is called
    return this.uniqueInstance;
  }

  //various methods the object has 
  public setFlagOne(value: Boolean): void {
    this.flagOne = value;
  }

  public setFlagTwo(value: Boolean): void {
    this.flagTwo = value;
  }

  public getFlagOne(): Boolean {
    return this.flagOne;
  }

  public getFlagTwo(): Boolean {
    return this.flagTwo;
  }
}