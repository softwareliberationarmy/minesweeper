export function createEmpty2dArray(rows: number, columns: number) {
  const result: number[][] = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    result.push([]);
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      result[rowIndex].push(0);
    }
  }
  return result;
}
