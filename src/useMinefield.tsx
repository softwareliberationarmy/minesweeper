import { useMemo } from 'react';
import { Minefield } from './Minefield';

export const useMinefield = (rows: number, columns: number) => {
  const mineField = useMemo<Minefield>(
    () => new Minefield(rows, columns),
    [rows, columns]
  );

  return {
    minefieldCells: mineField.getMinefieldCells(),
  };
};
