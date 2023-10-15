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
