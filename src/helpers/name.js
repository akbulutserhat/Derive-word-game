export const getRandomName = (names) => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const takeLastCharacter = (name) => {
  return name.slice(-1);
};

export const getNamesWithStartLastCharacter = (names, name) => {
  const lastCharacter = takeLastCharacter(name);
  return names.filter((name) => name[0] == lastCharacter);
};

export const getWrongNames = (names, lastCharacterNames) => {
  return names.filter((name) => !lastCharacterNames.includes(name));
};
