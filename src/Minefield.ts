export class Minefield {
  private minefieldCells: number[][] = [];

  constructor(rows: number, columns: number) {
    this.minefieldCells = this.createEmptyMinefield(rows, columns);

    const totalCells = rows * columns;
    const totalMines = Math.floor(totalCells * 0.2);

    this.buryTheMines(totalMines, rows, columns);
  }

  private buryTheMines(totalBombs: number, rows: number, columns: number) {
    for (let bombCount = 0; bombCount < totalBombs; bombCount++) {
      const nextBomb = this.getNextBombLocation(
        this.minefieldCells,
        rows,
        columns
      );
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
        if (
          this.isInRange(x, rows) &&
          this.isInRange(y, columns) &&
          this.isNotABomb(x, y)
        ) {
          this.minefieldCells[x][y]++;
        }
      }
    }
  }

  private isNotABomb(x: number, y: number) {
    return this.minefieldCells[x][y] !== -1;
  }

  private getNextBombLocation(
    minefieldCells: number[][],
    rows: number,
    columns: number
  ) {
    let x = -1;
    let y = -1;
    do {
      x = Math.floor(Math.random() * rows);
      y = Math.floor(Math.random() * columns);
    } while (this.isNotABomb(x, y));

    return { x, y };
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

  private isInRange(x: number, count: number) {
    return x >= 0 && x < count;
  }

  public getMinefieldCells(): number[][] {
    return this.minefieldCells;
  }
}
