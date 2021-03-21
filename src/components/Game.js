import { useEffect, useState } from 'react';
import Player from './Player';
import Timer from './Timer';
import Name from './Name';
import names from '../data/names.json';
import { finishGame } from '../helpers/game';
import {
  checkAnswerCorrect,
  checkAnswerExist,
  checkAnswerUsedBefore,
  getComputerAnswer,
  getUserAnswer,
  speechComputerAnswer,
} from '../helpers/answer';
import { getRandomName, getNamesWithStartLastCharacter } from '../helpers/name';
import EndScreen from './EndScreen';

const Game = ({ difficultyLevel }) => {
  const [name, setName] = useState(getRandomName(names));
  const [winner, setWinner] = useState();
  const [gameEnd, setGameEnd] = useState(false);

  // true = user, false = computer
  const [isUser, setIsUser] = useState(true);
  const [usedNames, setUsedNames] = useState([]);

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
    if (isUser) {
      const recognition = getUserAnswer(names);
      recognition.start(); // mikrofona hiç ses gelmezse 5 saniye sonra kapanıyor.
      recognition.onresult = (event) => {
        let answer = event.results[0][0].transcript;
        answer = answer.toLowerCase();
        const lastCharacterNames = getNamesWithStartLastCharacter(names, name);
        playGame(lastCharacterNames, answer);
      };
    }
    if (!isUser) {
      setTimeout(() => {
        const lastCharacterNames = getNamesWithStartLastCharacter(names, name);
        const answer = getComputerAnswer(
          names,
          lastCharacterNames,
          difficultyLevel
        );
        speechComputerAnswer(answer);
        setTimeout(playGame(lastCharacterNames, answer), computerWaitingTime);
      }, computerWaitingTime / 2);
    }
  }, [name]);

  return (
    <div className='game'>
      {!gameEnd && (
        <>
          <Player isUser={isUser}></Player>
          <Timer
            isUser={isUser}
            setWinner={setWinner}
            setGameEnd={setGameEnd}
            gameEnd={gameEnd}></Timer>
          <Name name={name}></Name>{' '}
        </>
      )}
      {gameEnd && <EndScreen winner={winner} usedNames={usedNames}></EndScreen>}
    </div>
  );
};

export default Game;
