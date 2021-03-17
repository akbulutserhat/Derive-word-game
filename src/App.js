import { useEffect, useState } from 'react';
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
  getComputerAnswer,
} from './helpers/answer';
import { getRandomName, getNamesWithStartLastCharacter } from './helpers/name';
import EndScreen from './components/EndScreen';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [name, setName] = useState(getRandomName(names));
  const [winner, setWinner] = useState();
  const [gameEnd, setGameEnd] = useState(false);
  // true = you, false = computer
  const [isUser, setIsUser] = useState(true);
  const [usedNames, setUsedNames] = useState([]);
  const [difficultLevel, setDifficultLevel] = useState(3);

  const [computerWaitingTime, setComputerWaitingTime] = useState(1000);

  const playGame = (lastCharacterNames, answer) => {
    if (
      checkAnswerUsedBefore(usedNames, answer) ||
      !checkAnswerExist(names, answer) ||
      !checkAnswerCorrect(lastCharacterNames, answer)
    ) {
      finishGame(isUser, setWinner, setGameEnd);
      setUsedNames([...usedNames, answer]);
      return;
    }

    setUsedNames([...usedNames, answer]);
    setIsUser(!isUser);
    setName(answer);
  };

  useEffect(() => {
    if (!isUser) {
      setTimeout(() => {
        const lastCharacterNames = getNamesWithStartLastCharacter(names, name);
        const answer = getComputerAnswer(
          names,
          lastCharacterNames,
          difficultLevel
        );
        playGame(lastCharacterNames, answer);
      }, computerWaitingTime);
    }
  }, [isUser]);

  const handleKeyUp = (e) => {
    if (e.keyCode == 13) {
      if (isUser) {
        const lastCharacterNames = getNamesWithStartLastCharacter(names, name);
        const answer = e.target.value;
        playGame(lastCharacterNames, answer);
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
          {gameEnd && <EndScreen usedNames={usedNames}></EndScreen>}
        </>
      )}
    </div>
  );
};

export default App;
