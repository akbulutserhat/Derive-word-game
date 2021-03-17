const EndScreen = ({ usedNames }) => {
  const wrongAnswer = usedNames[usedNames.length - 1];
  return (
    <div className='game-end-screen'>
      {usedNames.map(
        (usedName, idx) =>
          idx != usedNames.length - 1 && <span key={idx}>{usedName}</span>
      )}
      <pre className='error-text'>{wrongAnswer}</pre>
    </div>
  );
};

export default EndScreen;
