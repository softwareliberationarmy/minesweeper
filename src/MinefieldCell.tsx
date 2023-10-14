import { useEffect, useState } from "react";
import { CellReveal } from "./CellReveal";
import "./MinefieldCell.css";
import { Icon } from "semantic-ui-react";

interface MinefieldCellProps {
  bombCount: number;
  lastRunDate: Date;
}

export const MinefieldCell = ({
  bombCount,
  lastRunDate,
}: MinefieldCellProps) => {
  const userReveal = () => {
    setReveal(true);
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
    <CellReveal bombCount={bombCount} />
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
