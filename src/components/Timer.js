import { useState, useEffect } from 'react';
import { finishGame } from '../helpers/game';

const Timer = ({ isUser, setWinner, setGameEnd }) => {
  const [seconds, setSeconds] = useState(8);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        finishGame(isUser, setWinner, setGameEnd, 'end-time');
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
      <p>{seconds}</p>
    </div>
  );
};

export default Timer;
