export const checkAnswerExist = (names, answer) => {
  return names.includes(answer);
};

export const checkAnswerUsedBefore = (beforeAnswer, answer) => {
  return beforeAnswer.includes(answer);
};

export const checkAnswerCorrect = (lastCharacterNames, answer) => {
  return lastCharacterNames.includes(answer);
};
