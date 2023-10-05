import './App.css';
import { Minefield } from './Minefield';

function App() {
  const createNewGame = () => alert('Hello!');

  return (
    <>
      <h1>Minesweeper</h1>
      <div>
        <button onClick={createNewGame}>New Game</button>
      </div>
      <Minefield  />
    </>
  );
}

export default App;
