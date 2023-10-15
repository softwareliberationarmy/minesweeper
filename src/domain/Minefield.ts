import { Mineplot } from "./Mineplot";
import { createEmpty2dArray } from "./createEmpty2dArray";

export class Minefield {
  private minefieldCells: number[][];

  constructor(private rows: number, private columns: number) {
    this.minefieldCells = createEmpty2dArray(rows, columns);
    this.buryTheMines();
  }

  private buryTheMines() {
    const totalCells = this.rows * this.columns;
    const totalMines = Math.floor(totalCells * 0.2);

    for (let bombCount = 0; bombCount < totalMines; bombCount++) {
      const nextBomb = this.getNextBombLocation();
      this.minefieldCells[nextBomb.x][nextBomb.y] = -1;
      this.updateNeighborCounts(nextBomb);
    }
  }

  private updateNeighborCounts(nextBomb: { x: number; y: number }) {
    for (let x = nextBomb.x - 1; x <= nextBomb.x + 1; x++) {
      for (let y = nextBomb.y - 1; y <= nextBomb.y + 1; y++) {
        if (this.isAValidEmptyCell(x, y)) {
          this.minefieldCells[x][y]++;
        }
      }
    }
  }

  private isAValidEmptyCell(x: number, y: number) {
    return (
      this.isInRange(x, this.rows) &&
      this.isInRange(y, this.columns) &&
      !this.isAMine(x, y)
    );
  }

  private isAMine(x: number, y: number) {
    return this.minefieldCells[x][y] === -1;
  }

  private getNextBombLocation() {
    let x = -1,
      y = -1;
    do {
      x = Math.floor(Math.random() * this.rows);
      y = Math.floor(Math.random() * this.columns);
    } while (this.isAMine(x, y));

    return { x, y };
  }

  private isInRange(x: number, count: number) {
    return x >= 0 && x < count;
  }

  public getMinefieldPlots(): Mineplot[][] {
    return this.minefieldCells.map((row) =>
      row.map((cell) => new Mineplot(cell))
    );
  }
}
