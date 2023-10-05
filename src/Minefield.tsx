import React from 'react';
import './Minefield.css';

export const Minefield = () => {
  return (
    <div id="minefield">
      <div className="row">
        <button className="cell"></button>
        <button className="cell"></button>
      </div>
      <div className="row">
        <button className="cell"></button>
        <button className="cell"></button>
      </div>
    </div>
  );
};
