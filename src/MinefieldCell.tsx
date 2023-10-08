import { useState } from 'react';
import { Icon } from 'semantic-ui-react';

export const MinefieldCell = () => {
  const userReveal = () => {
    setReveal(true);
  };

  const [reveal, setReveal] = useState(false);

  const inner = reveal ? (
    <Icon name="bomb" size="large" />
  ) : (
    <button className="cell" onClick={userReveal}></button>
  );

  return <td className="cell">{inner}</td>;
};
