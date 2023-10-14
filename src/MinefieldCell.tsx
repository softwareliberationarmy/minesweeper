import { useEffect, useState } from 'react';
import { CellReveal } from './CellReveal';
import './MinefieldCell.css';

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

  useEffect(() => {
    setReveal(false);
  }, [lastRunDate]);

  const inner = reveal ? (
    <CellReveal bombCount={bombCount} />
  ) : (
    <button className="cell" onClick={userReveal}></button>
  );

  return <td className="cell">{inner}</td>;
};
