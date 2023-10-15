import { useMemo, useState } from "react";
import { Minefield } from "./domain/Minefield";

export const useMinefield = (rows: number, columns: number) => {
  const [lastRunDate, setLastRunDate] = useState<Date>(new Date());
  const mineField = useMemo<Minefield>(
    () => new Minefield(rows, columns),
    [rows, columns, lastRunDate]
  );

  const resetCells = () => {
    setLastRunDate(new Date());
  };

  return {
    minefieldCells: mineField.getMinefieldCells(),
    resetCells,
    lastRunDate,
  };
};
