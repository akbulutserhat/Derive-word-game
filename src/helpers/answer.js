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
  speechSynthesis.speak(utterance);
};

export const getUserAnswer = (names) => {
  const SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;

  /*const SpeechGrammarList =
    window.webkitSpeechGrammarList || window.SpeechGrammarList;*/

  /*const grammar =
    '#JSGF V1.0; grammar names; public <name> = ' + names.join(' | ') + ' ;';*/

  let recognition = new SpeechRecognition();
  /*const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;*/
  recognition.lang = 'tr-TR';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  return recognition;
};
