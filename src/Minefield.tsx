import './Minefield.css';
import { MinefieldCell } from './MinefieldCell';

export const Minefield = () => {
  const minefieldCells: number[][] = [
    [0, 1, 1],
    [0, 1, -1],
    [0, 1, 1],
  ];
  let rowIndex = 0;
  let cellIndex = 0;

  return (
    <table id="minefield">
      <tbody>
        {minefieldCells.map((row) => (
          <tr key={rowIndex++} className="row">
            {row.map((bombCount) => (
              <MinefieldCell key={cellIndex++} bombCount={bombCount} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
