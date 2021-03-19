import { useState } from 'react';
import './App.css';

import Game from './components/Game';
import StartScreen from './components/StartScreen';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState(3);

  console.log(difficultyLevel);

  return (
    <div className='main'>
      {!startGame && (
        <StartScreen
          setStartGame={setStartGame}
          setDifficultyLevel={setDifficultyLevel}></StartScreen>
      )}
      {startGame && <Game difficultyLevel={difficultyLevel}></Game>}
    </div>
  );
};

export default App;
