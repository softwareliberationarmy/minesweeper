import "./MinefieldPanel.css";
import { MinefieldCell } from "./MinefieldCell";
import { useMemo } from "react";
import { Mineplot } from "./domain/Mineplot";

interface MinefieldPanelProps {
  minefieldCells: Mineplot[][];
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
  const table = useMemo(() => {
    let rowIndex = 0;
    let cellIndex = 0;

    const onReveal = (bombCount: number) => {
      if (bombCount === -1) {
        console.log("panel update, bomb drop");
        onLoss();
      } else {
        const remainingSafe = minefieldCells
          .flat()
          .filter((c) => c.bombCount !== -1 && !c.isRevealed).length;
        if (remainingSafe === 0) {
          onWin();
        }
      }
    };

    return (
      <table id="minefield">
        <tbody>
          {minefieldCells.map((row) => (
            <tr key={rowIndex++} className="row">
              {row.map((plot) => (
                <MinefieldCell
                  onReveal={onReveal}
                  key={cellIndex++}
                  plot={plot}
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
