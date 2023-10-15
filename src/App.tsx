import { useState } from "react";
import "./App.css";
import { MinefieldPanel } from "./MinefieldPanel";
import { useMinefield } from "./useMinefield";

type GameStatus = "in progress" | "won" | "lost";

function App() {
  const [status, setStatus] = useState<GameStatus>("in progress");

  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const { minefieldCells, resetCells, lastRunDate } = useMinefield(
    rows,
    columns
  );

  const newGameClick = () => {
    resetCells();
    setStatus("in progress");
  };

  const onWin = () => {
    setStatus("won");
  };
  const onLoss = () => {
    setStatus("lost");
  };

  const showStatusMessage = () => {
    switch (status) {
      case "in progress":
        return <h2>Don't step on a mine!</h2>;
      case "won":
        return <h2 style={{ color: "green" }}>You won!</h2>;
      case "lost":
        return <h2 style={{ color: "red" }}>You lost!</h2>;
    }
  };

  return (
    <>
      <h1>Minesweeper</h1>
      {showStatusMessage()}
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
        onWin={onWin}
        onLoss={onLoss}
      />
    </>
  );
}

export default App;
