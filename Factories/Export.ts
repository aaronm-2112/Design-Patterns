//Purpose: An interface that defines an export and its methods.

export default abstract class Export {

  // an export's primary property 
  public header: String[] = [];

  // a method that is determined by the product's subclasses
  public abstract writeToFile(): void;


}