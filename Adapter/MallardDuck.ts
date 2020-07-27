import Duck from './Duck';

export default class MallardDuck implements Duck {
  fly(): void {
    console.log("Mallard duck flying");
  }

  quack(): void {
    console.log("Quack quack");
  }
}