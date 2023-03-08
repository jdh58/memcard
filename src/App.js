import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import SplashScreen from './components/SplashScreen';
import Yoshi from './assets/yoshi.png';
import BabyMario from './assets/babymario.png';
import Flower from './assets/flower.png';
import Egg from './assets/egg.png';
import Bandit from './assets/bandit.png';
import ShyGuy from './assets/shyguy.png';
import Chomp from './assets/chomp.png';
import Kamek from './assets/kamek.png';
import Monkey from './assets/monkey.png';
import Plant from './assets/plant.png';
import uniqid from 'uniqid';

function App() {
  const [gameState, setGameState] = useState('start');
  const [cardsGrid, setCardsGrid] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const cardAssets = {
      1: { img: Yoshi, name: 'Yoshi', id: uniqid() },
      2: { img: BabyMario, name: 'Baby Mario', id: uniqid() },
      3: { img: Flower, name: 'Flower', id: uniqid() },
      4: { img: Egg, name: 'Egg', id: uniqid() },
      5: { img: Bandit, name: 'Bandit', id: uniqid() },
      6: { img: ShyGuy, name: 'ShyGuy', id: uniqid() },
      7: { img: Chomp, name: 'Chain Chomp', id: uniqid() },
      8: { img: Kamek, name: 'Kamek', id: uniqid() },
      9: { img: Monkey, name: 'Monkey', id: uniqid() },
      10: { img: Plant, name: 'Piranha Plant', id: uniqid() },
    };

    let grid = [];
    for (let i = 1; i <= 10; i++) {
      grid.push(
        <Card
          key={cardAssets[i].id}
          id={cardAssets[i].id}
          src={cardAssets[i].img}
          name={cardAssets[i].name}
          onClick={(e) => {
            let id = e.currentTarget.id;
            setClickedCards((clickedCards) => [...clickedCards, id]);
          }}
        />
      );
    }

    setCardsGrid(grid);

    // If there's a stored best score, add it.
    if (localStorage.getItem('bestScore') > 0) {
      setBestScore(localStorage.getItem('bestScore'));
    }
  }, []);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      localStorage.setItem('bestScore', `${currentScore}`);
    }
  }, [currentScore]);

  useEffect(() => {
    // Check every element but the just added one to see if there's a duplicate.
    for (let i = 0; i < clickedCards.length - 1; i++) {
      if (clickedCards[i] === clickedCards[clickedCards.length - 1]) {
        setGameState('end');
        setGameScore(currentScore);
        setCurrentScore(0);
        setClickedCards([]);
        return;
      }
    }
    if (clickedCards.length !== 0) {
      setCurrentScore((currentScore) => currentScore + 1);

      const array = cardsGrid.slice();
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setCardsGrid(array);
    }
  }, [clickedCards]);

  return (
    <div className="App">
      <header className="header">Current: {currentScore}</header>
      <main>
        {gameState === 'start' ? (
          <SplashScreen isEnd={false} setGameState={setGameState} />
        ) : null}
        {gameState === 'during' ? (
          <div className="cardGrid">{cardsGrid}</div>
        ) : null}
        {gameState === 'end' ? (
          <SplashScreen
            isEnd={true}
            setGameState={setGameState}
            score={gameScore}
          />
        ) : null}
      </main>
      <footer className="footer">Best: {bestScore}</footer>
    </div>
  );
}

export default App;
