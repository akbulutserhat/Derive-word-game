const EndScreen = ({ usedNames, winner }) => {
  const { message, type } = winner;
  let wrongAnswer = '';
  if (type != 'end-time') {
    wrongAnswer = usedNames[usedNames.length - 1];
  }
  return (
    <div className='game-end-screen'>
      <p className='win-type'>
        {type == 'end-time' ? 'Süre Bitti!' : 'Yanlış Cevap Verildi!'}
      </p>
      <p className='winner-text'>{message}</p>
      <div className='used-names'>
        {usedNames.map((usedName, idx) =>
          idx != usedNames.length - 1 ? (
            <pre key={idx}>{usedName}</pre>
          ) : wrongAnswer ? (
            <pre key={idx} className='wrong-answer'>
              {wrongAnswer}
            </pre>
          ) : (
            <pre key={idx}>{usedName}</pre>
          )
        )}
      </div>
    </div>
  );
};

export default EndScreen;
