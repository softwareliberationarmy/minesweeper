import './Minefield.css';
import { MinefieldCell } from './MinefieldCell';
import { useMinefield } from './useMinefield';

export const Minefield = () => {
  const { minefieldCells } = useMinefield(3, 3);

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
