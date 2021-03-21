import { getWrongNames, getRandomName } from './name';

export const checkAnswerExist = (names, answer) => {
  return names.includes(answer);
};

export const checkAnswerUsedBefore = (beforeAnswer, answer) => {
  return beforeAnswer.includes(answer);
};

export const checkAnswerCorrect = (lastCharacterNames, answer) => {
  return lastCharacterNames.includes(answer);
};

export const getComputerAnswer = (
  names,
  lastCharacterNames,
  difficultyLevel = 3
) => {
  // difficult level can be 1 = hard , 3 = medium , 5 = easy

  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber <= difficultyLevel) {
    // wrong answer for computer
    const wrongNames = getWrongNames(names, lastCharacterNames);
    return getRandomName(wrongNames);
  }
  return getRandomName(lastCharacterNames);
};

export const speechComputerAnswer = (answer) => {
  let utterance = new SpeechSynthesisUtterance(answer);
  utterance.lang = 'tr-TR'; // Güncel browserlarda türkçe versiyon yok.
  speechSynthesis.speak(utterance);
};

export const getUserAnswer = () => {
  const SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;

  let recognition = new SpeechRecognition();
  recognition.lang = 'tr-TR';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  return recognition;
};
