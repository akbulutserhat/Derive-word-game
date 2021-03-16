import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [winner, setWinner] = useState();
  const [gameEnd, setGameEnd] = useState(false);
  // true = you, false = computer
  const [isUser, setIsUser] = useState(true);
  return (
    <div className='main'>
      {!startGame && <button onClick={() => setStartGame(true)}>Start</button>}
      {startGame && (
        <>
          <div className='player'>{isUser ? <p>YOU</p> : <p>COMPUTER</p>}</div>
          <Timer
            initialSeconds='8'
            isUser={isUser}
            winner={winner}
            setWinner={setWinner}
            setGameEnd={setGameEnd}
            gameEnd={gameEnd}></Timer>
          <div className='word'>
            <p>deneme</p>
          </div>
          <input name='new-word'></input>
          <button onClick={() => setIsUser(!isUser)}>Change User</button>
        </>
      )}
    </div>
  );
};

export default App;
