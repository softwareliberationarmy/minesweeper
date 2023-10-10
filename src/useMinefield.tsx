import { Minefield } from "./Minefield";

export const useMinefield = (rows: number, columns: number) => {
  const mineField = new Minefield(rows, columns);

  return {
    minefieldCells: mineField.getMinefieldCells(),
  };
};
