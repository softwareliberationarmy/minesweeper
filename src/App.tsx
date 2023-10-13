import { useState } from "react";
import "./App.css";
import { MinefieldPanel } from "./MinefieldPanel";
import { useMinefield } from "./useMinefield";

function App() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const { minefieldCells, resetCells, lastRunDate } = useMinefield(
    rows,
    columns
  );

  const newGameClick = () => {
    resetCells();
  };

  return (
    <>
      <h1>Minesweeper</h1>
      <div>
        <label htmlFor="rowInput">Rows:</label>
        <input
          id="rowInput"
          className="numberBox"
          type="number"
          min={3}
          max={20}
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value))}
        />
        <label htmlFor="columnInput">Columns:</label>
        <input
          id="columnInput"
          className="numberBox"
          type="number"
          min={3}
          max={20}
          value={columns}
          onChange={(e) => setColumns(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={newGameClick}>New Game</button>
      </div>
      <MinefieldPanel
        minefieldCells={minefieldCells}
        lastRunDate={lastRunDate}
      />
    </>
  );
}

export default App;
