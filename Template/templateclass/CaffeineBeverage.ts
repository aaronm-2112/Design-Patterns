//Purpose: The high level component that dictates the algorithm steps for making a caffeine based beverage.

export default abstract class CaffeineBeverage {
  //the algorithm definition -- should not be overridable but no typescript way to do this that is obvious
  public prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  //a step that will be defined by the subclasses
  abstract brew(): void;

  //a step that will be defined by the subclasses
  abstract addCondiments(): void;

  //a concrete method dictated by the base class
  boilWater(): void {
    console.log("Boiling water");
  }

  //a concrete method dictated by the base class
  pourInCup(): void {
    console.log("Pouring into cup");
  }

  //a hook with a default implementation that can be overriden in the subclasses -- as it is does not change algorithm flow until subclass changes its behaviour 
  customerWantsCondiments(): boolean {
    return true;
  }

}