import { useState } from 'react';
import './App.css';

import Game from './components/Game';

const App = () => {
  const [startGame, setStartGame] = useState(false);

  return (
    <div className='main'>
      {!startGame && <button onClick={() => setStartGame(true)}>Start</button>}
      {startGame && <Game></Game>}
    </div>
  );
};

export default App;
