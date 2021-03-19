const EndScreen = ({ usedNames }) => {
  const wrongAnswer = usedNames[usedNames.length - 1];
  return (
    <div className='game-end-screen'>
      {usedNames.map(
        (usedName, idx) =>
          idx != usedNames.length - 1 && <pre key={idx}>{usedName}</pre>
      )}
      <pre className='error-text'>{wrongAnswer}</pre>
    </div>
  );
};

export default EndScreen;
