import './Minefield.css';
import { MinefieldCell } from './MinefieldCell';

export const Minefield = () => {
  return (
    <table id="minefield">
      <tr className="row">
        <MinefieldCell bombCount={0} />
        <MinefieldCell bombCount={1} />
        <MinefieldCell bombCount={1} />
      </tr>
      <tr className="row">
        <MinefieldCell bombCount={0} />
        <MinefieldCell bombCount={1} />
        <MinefieldCell bombCount={-1} />
      </tr>
      <tr className="row">
        <MinefieldCell bombCount={0} />
        <MinefieldCell bombCount={1} />
        <MinefieldCell bombCount={1} />
      </tr>
    </table>
  );
};
