import './App.css';
import { MinefieldPanel } from './MinefieldPanel';
import { useMinefield } from './useMinefield';

function App() {
  const { minefieldCells, resetCells, lastRunDate } = useMinefield(3, 3);

  const newGameClick = () => {
    resetCells();
  };

  return (
    <>
      <h1>Minesweeper</h1>
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
