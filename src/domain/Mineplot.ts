//Mineplot is the domain class representing a single cell in the minefield.
//It's responsible for managing the count of bombs in its neighborhood and whether it's been revealed or not.
export class Mineplot {
  private revealed: boolean = false;

  constructor(private neighborBombCount: number) {}

  get bombCount(): number {
    return this.neighborBombCount;
  }

  get isRevealed(): boolean {
    return this.revealed;
  }

  reveal(): void {
    this.revealed = true;
  }
}
