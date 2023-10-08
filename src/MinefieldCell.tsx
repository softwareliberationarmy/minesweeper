import { useState } from 'react';
import { CellReveal } from './CellReveal';

interface MinefieldCellProps {
  bombCount: number;
}

export const MinefieldCell = ({ bombCount }: MinefieldCellProps) => {
  const userReveal = () => {
    setReveal(true);
  };

  const [reveal, setReveal] = useState(false);

  const inner = reveal ? (
    <CellReveal bombCount={bombCount} />
  ) : (
    <button className="cell" onClick={userReveal}></button>
  );

  return <td className="cell">{inner}</td>;
};
