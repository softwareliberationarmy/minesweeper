import './Minefield.css';
import { MinefieldCell } from './MinefieldCell';

export const Minefield = () => {
  return (
    <table id="minefield">
      <tr className="row">
        <MinefieldCell />
        <MinefieldCell />
        <MinefieldCell />
      </tr>
      <tr className="row">
        <MinefieldCell />
        <MinefieldCell />
        <MinefieldCell />
      </tr>
      <tr className="row">
        <MinefieldCell />
        <MinefieldCell />
        <MinefieldCell />
      </tr>
    </table>
  );
};
