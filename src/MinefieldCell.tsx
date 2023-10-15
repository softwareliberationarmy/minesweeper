import { useEffect, useState } from "react";
import { CellReveal } from "./CellReveal";
import "./MinefieldCell.css";
import { Icon } from "semantic-ui-react";
import { Mineplot } from "./domain/Mineplot";

interface MinefieldCellProps {
  plot: Mineplot;
  lastRunDate: Date;
  onReveal: (bombCount: number) => void;
}

export const MinefieldCell = ({
  plot,
  lastRunDate,
  onReveal,
}: MinefieldCellProps) => {
  const userReveal = () => {
    setReveal(true);
    plot.reveal();
    onReveal(plot.bombCount);
  };

  const [reveal, setReveal] = useState(false);
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    setReveal(false);
  }, [lastRunDate]);

  const onRightClickButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setShowFlag((current) => !current);
  };

  const inner = reveal ? (
    <CellReveal bombCount={plot.bombCount} />
  ) : (
    <button
      className="cell"
      onClick={userReveal}
      onContextMenu={onRightClickButton}
    >
      {showFlag ? (
        <Icon name="flag" size="large" style={{ color: "red" }} />
      ) : (
        ""
      )}
    </button>
  );

  return <td className="cell">{inner}</td>;
};
