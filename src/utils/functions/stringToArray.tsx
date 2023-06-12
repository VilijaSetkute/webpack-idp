export const stringToArray = <T extends string>(text: T): T[] => {
  if (typeof text === 'string') {
    return text.split(' ') as T[];
  }

  throw new Error('Your input is not a text.');
};
