import "./MinefieldPanel.css";
import { MinefieldCell } from "./MinefieldCell";
import { useEffect, useMemo, useState } from "react";

interface MinefieldPanelProps {
  minefieldCells: number[][];
  lastRunDate: Date;
  onWin: () => void;
  onLoss: () => void;
}

export const MinefieldPanel = ({
  minefieldCells,
  lastRunDate,
  onWin,
  onLoss,
}: MinefieldPanelProps) => {
  const safeCount = minefieldCells.flat().filter((c) => c !== -1).length;
  const [remainingSafe, setRemainingSafe] = useState(safeCount);

  useEffect(() => {
    if (remainingSafe === 0) {
      onWin();
    }
  }, [remainingSafe, onWin]);

  const table = useMemo(() => {
    let rowIndex = 0;
    let cellIndex = 0;

    const onReveal = (bombCount: number) => {
      if (bombCount === -1) {
        console.log("panel update, bomb drop");
        onLoss();
      } else {
        setRemainingSafe((current) => current - 1);
      }
    };

    return (
      <table id="minefield">
        <tbody>
          {minefieldCells.map((row) => (
            <tr key={rowIndex++} className="row">
              {row.map((bombCount) => (
                <MinefieldCell
                  onReveal={onReveal}
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
  }, [lastRunDate, minefieldCells, onLoss]);

  return table;
};
