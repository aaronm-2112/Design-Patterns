export default interface Beverage {
  description: String;

  getDescription(): String;

  cost(): number;
}