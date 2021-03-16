import { useState } from 'react';
import './App.css';
import Player from './components/Player';
import Timer from './components/Timer';
import Name from './components/Name';
import names from './data/names.json';
import { finishGame } from './helpers/game';
import {
  checkAnswerCorrect,
  checkAnswerExist,
  checkAnswerUsedBefore,
} from './helpers/answer';
import { getRandomName, getNamesWithStartLastCharacter } from './helpers/name';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [name, setName] = useState(getRandomName(names));
  const [winner, setWinner] = useState();
  const [gameEnd, setGameEnd] = useState(false);
  // true = you, false = computer
  const [isUser, setIsUser] = useState(true);
  const [usedNames, setUsedNames] = useState([]);

  const handleKeyUp = (e) => {
    if (e.keyCode == 13) {
      const lastCharacterNames = getNamesWithStartLastCharacter(names, name);
      const answer = e.target.value;
      if (checkAnswerUsedBefore(usedNames, answer)) {
        finishGame(isUser, setWinner, setGameEnd);
        return;
      }

      if (!checkAnswerExist(names, answer)) {
        finishGame(isUser, setWinner, setGameEnd);
        return;
      }

      if (checkAnswerCorrect(lastCharacterNames, answer)) {
        setUsedNames([...usedNames, answer]);
        setIsUser(!isUser);
        setName(answer);

        e.target.value = '';
      }
    }
  };
  return (
    <div className='main'>
      {!startGame && <button onClick={() => setStartGame(true)}>Start</button>}
      {startGame && (
        <>
          <Player isUser={isUser}></Player>
          <Timer
            isUser={isUser}
            winner={winner}
            setWinner={setWinner}
            setGameEnd={setGameEnd}
            gameEnd={gameEnd}></Timer>
          <Name name={name}></Name>
          <input
            name='new-word'
            onKeyUp={!gameEnd ? handleKeyUp : () => {}}></input>
          {gameEnd && (
            <div>
              {usedNames.map((usedName, idx) => (
                <pre key={idx}>{usedName}</pre>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
