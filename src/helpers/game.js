export const finishGame = (
  isUser,
  setWinner,
  setGameEnd,
  type = 'wrong-answer'
) => {
  if (!isUser) setWinner({ message: 'KAZANDIN', type: type });
  else setWinner({ message: 'KAYBETTİN', type: type });
  setGameEnd(true);
};
