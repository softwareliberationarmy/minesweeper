import './App.css';
import { MinefieldPanel } from './MinefieldPanel';

function App() {
  const createNewGame = () => alert('Hello!');

  return (
    <>
      <h1>Minesweeper</h1>
      <div>
        <button onClick={createNewGame}>New Game</button>
      </div>
      <MinefieldPanel />
    </>
  );
}

export default App;
