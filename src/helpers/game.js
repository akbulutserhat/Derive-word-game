export const finishGame = (isUser, setWinner, setGameEnd) => {
  if (!isUser) setWinner({ message: 'KAZANDIN', type: 'user' });
  else setWinner({ message: 'KAYBETTİN', type: 'computer' });
  setGameEnd(true);
};
