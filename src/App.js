import Card from './components/Card';
import React, { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState('start');

  const cardGrid = () => {
    let grid = [];

    for (let i = 0; i < 10; i++) {
      grid.push(<Card />);
    }
    console.log(grid);
    return grid;
  };

  return (
    <div className="App">
      <header className="header">Current: 5</header>
      <main>
        {gameState === 'start' ? (
          <div className="start">
            <h1>MEMORY GAME</h1>
            <button
              onClick={() => {
                setGameState('during');
              }}
            >
              START
            </button>
          </div>
        ) : null}
        {gameState === 'during' ? (
          <div className="cardGrid">{cardGrid()}</div>
        ) : null}
        {/* <div className="end">
          <h1>GAME OVER!</h1>
          <h2>SCORE: 15</h2>
          <button>REPLAY? </button>
        </div> */}
      </main>
      <footer className="footer">Best: 12</footer>
    </div>
  );
}

export default App;
