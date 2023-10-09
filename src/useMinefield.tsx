function getNextBombLocation(
  minefieldCells: number[][],
  rows: number,
  columns: number
) {
  let x = -1;
  let y = -1;
  do {
    x = Math.floor(Math.random() * rows);
    y = Math.floor(Math.random() * columns);
  } while (minefieldCells[x][y] === -1);

  return { x, y };
}

export const useMinefield = (rows: number, columns: number) => {
  const minefieldCells: number[][] = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    minefieldCells.push([]);
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      minefieldCells[rowIndex].push(0);
    }
  }

  const totalCells = rows * columns;
  const totalBombs = Math.floor(totalCells * 0.2);

  for (let bombCount = 0; bombCount < totalBombs; bombCount++) {
    const nextBomb = getNextBombLocation(minefieldCells, rows, columns);
    minefieldCells[nextBomb.x][nextBomb.y] = -1;
    for (let x = nextBomb.x - 1; x <= nextBomb.x + 1; x++) {
      for (let y = nextBomb.y - 1; y <= nextBomb.y + 1; y++) {
        if (
          x >= 0 &&
          x < rows &&
          y >= 0 &&
          y < columns &&
          minefieldCells[x][y] !== -1
        ) {
          minefieldCells[x][y]++;
        }
      }
    }
  }

  return {
    minefieldCells,
  };
};
