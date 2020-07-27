//Purpose: The adapter that wraps the turkey interface with the Duck interface so the turkey can be interacted with using the Duck interface.
import Duck from './Duck';
import Turkey from './Turkey';

export default class TurkeyAdapter implements Duck {
  //turkey gets composed into the adapter so we can call the implementation of the quack and fly methods
  private turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    for (let i = 0; i < 4; i++) {
      this.turkey.fly();
    }
  }
}