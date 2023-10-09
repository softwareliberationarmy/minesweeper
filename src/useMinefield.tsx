export const useMinefield = (rows: number, columns: number) => { 
  const minefieldCells: number[][] = [
    [0, 1, 1],
    [0, 1, -1],
    [0, 1, 1],
  ];
  return {
    minefieldCells,
  };
};
