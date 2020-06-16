import InBeverage from '../Component/InBeverage';

export default abstract class InCondimentDecorator extends InBeverage {
  abstract getDescription(): string;
}