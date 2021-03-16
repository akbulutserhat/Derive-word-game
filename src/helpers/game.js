export const finishGame = (isUser, setWinner, setGameEnd) => {
  if (!isUser) setWinner({ message: 'YOU WIN', type: 'user' });
  else setWinner({ message: 'YOU LOSE', type: 'computer' });
  setGameEnd(true);
};
