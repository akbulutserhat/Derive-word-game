import { useState, useEffect } from 'react';
import { finishGame } from '../helpers/game';

const Timer = ({ isUser, winner, setWinner, gameEnd, setGameEnd }) => {
  const [seconds, setSeconds] = useState(8);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        finishGame(isUser, setWinner, setGameEnd);
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    setSeconds(8);
  }, [isUser]);

  return (
    <div className='timer'>
      {!gameEnd ? <p>{seconds}</p> : <p>{winner?.message}</p>}
    </div>
  );
};

export default Timer;
