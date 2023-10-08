import { Icon } from 'semantic-ui-react';

interface CellRevealProps {
  bombCount: number;
}

export const CellReveal = ({ bombCount }: CellRevealProps) => {
  let result;
  switch (bombCount) {
    case -1:
      result = <Icon name="bomb" size="large" />;
      break;
    case 0:
      result = <div />;
      break;
    default:
      result = <div>{bombCount}</div>;
      break;
  }
  return result;
};
