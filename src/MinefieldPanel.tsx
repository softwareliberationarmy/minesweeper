import './MinefieldPanel.css';
import { MinefieldCell } from './MinefieldCell';
import { useMemo } from 'react';

interface MinefieldPanelProps {
  minefieldCells: number[][];
  lastRunDate: Date;
}

export const MinefieldPanel = ({
  minefieldCells,
  lastRunDate,
}: MinefieldPanelProps) => {
  const table = useMemo(() => {
    let rowIndex = 0;
    let cellIndex = 0;

    return (
      <table id="minefield">
        <tbody>
          {minefieldCells.map((row) => (
            <tr key={rowIndex++} className="row">
              {row.map((bombCount) => (
                <MinefieldCell
                  key={cellIndex++}
                  bombCount={bombCount}
                  lastRunDate={lastRunDate}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }, [lastRunDate, minefieldCells]);

  return table;
};
