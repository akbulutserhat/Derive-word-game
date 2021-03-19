import { useState } from 'react';
import RadioBox from './RadioBox';

const StartScreen = ({ setStartGame, setDifficultyLevel }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickStart = () => {
    const difficultyValue = document.querySelector(
      'input[type="radio"]:checked'
    )?.value;
    if (!difficultyValue) {
      setErrorMessage('Lütfen zorluk seviyesi seçiniz!');
      return;
    }
    setDifficultyLevel(difficultyValue);
    setStartGame(true);
  };
  return (
    <div className='start-screen'>
      <div className='difficult-levels'>
        <RadioBox text='Kolay' value='5'></RadioBox>
        <RadioBox text='Orta' value='3'></RadioBox>
        <RadioBox text='Zor' value='1'></RadioBox>
      </div>
      <p>{errorMessage ? errorMessage : ''}</p>
      <button onClick={handleClickStart}>Başla</button>
    </div>
  );
};

export default StartScreen;
