import { Mineplot } from "./Mineplot";

export class Minefield {
  private minefieldCells: number[][] = [];

  constructor(rows: number, columns: number) {
    this.minefieldCells = this.createEmptyMinefield(rows, columns);
    this.buryTheMines(rows, columns);
  }

  private createEmptyMinefield(rows: number, columns: number) {
    const minefieldCells: number[][] = [];

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      minefieldCells.push([]);
      for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        minefieldCells[rowIndex].push(0);
      }
    }
    return minefieldCells;
  }

  private buryTheMines(rows: number, columns: number) {
    const totalCells = rows * columns;
    const totalMines = Math.floor(totalCells * 0.2);

    for (let bombCount = 0; bombCount < totalMines; bombCount++) {
      const nextBomb = this.getNextBombLocation(rows, columns);
      this.minefieldCells[nextBomb.x][nextBomb.y] = -1;
      this.updateNeighborCounts(nextBomb, rows, columns);
    }
  }

  private updateNeighborCounts(
    nextBomb: { x: number; y: number },
    rows: number,
    columns: number
  ) {
    for (let x = nextBomb.x - 1; x <= nextBomb.x + 1; x++) {
      for (let y = nextBomb.y - 1; y <= nextBomb.y + 1; y++) {
        if (this.isAValidEmptyCell(x, rows, y, columns)) {
          this.minefieldCells[x][y]++;
        }
      }
    }
  }

  private isAValidEmptyCell(
    x: number,
    rows: number,
    y: number,
    columns: number
  ) {
    return (
      this.isInRange(x, rows) &&
      this.isInRange(y, columns) &&
      !this.isAMine(x, y)
    );
  }

  private isAMine(x: number, y: number) {
    return this.minefieldCells[x][y] === -1;
  }

  private getNextBombLocation(rows: number, columns: number) {
    let x = -1;
    let y = -1;
    do {
      x = Math.floor(Math.random() * rows);
      y = Math.floor(Math.random() * columns);
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
