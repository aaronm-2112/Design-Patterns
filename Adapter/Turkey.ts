//Purpose: The interface that needs to be adapted in order for the client to call it using the duck interface.

export default class Turkey {
  gobble(): void {
    console.log("Gobble gobble");
  }
  fly(): void {
    console.log("Im a turkey flying for a short time");
  }
}