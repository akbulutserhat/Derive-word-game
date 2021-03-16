import { useState, useEffect } from 'react';

const Timer = ({
  initialSeconds,
  isUser,
  winner,
  setWinner,
  gameEnd,
  setGameEnd,
}) => {
  const [seconds, setSeconds] = useState(Number(initialSeconds));

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (!isUser) setWinner({ message: 'YOU WIN', type: 'user' });
        else setWinner({ message: 'YOU LOSE', type: 'computer' });
        setGameEnd(true);
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    setSeconds(Number(initialSeconds));
  }, [isUser]);

  return (
    <div className='timer'>
      {!gameEnd ? <p>{seconds}</p> : <p>{winner?.message}</p>}
    </div>
  );
};

export default Timer;
