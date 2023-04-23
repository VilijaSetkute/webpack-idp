import { DefaultOptions } from '../models/model';

const getSplitPosition = (
  word: string,
  fixation: string,
  isLongWord: boolean
) => {
  const length = word.length;
  switch (fixation) {
    case 'none':
      return 0;
    case 'low':
      return isLongWord ? Math.ceil(length / 3) : Math.floor(length / 3);
    case 'standard':
      return isLongWord ? Math.ceil(length / 2) : Math.floor(length / 2);
    case 'strong':
      return isLongWord
        ? Math.ceil((length / 3) * 2)
        : Math.floor((length / 3) * 2);
  }
};

export const applyReader = (selectedOptions: DefaultOptions, word: string) => {
  const isLongWord = word.length > 4;
  const charPos = getSplitPosition(word, selectedOptions.fixation, isLongWord);

  const splitWord = [word.slice(0, charPos), word.slice(charPos)];

  return (
    <>
      <span
        className={
          selectedOptions.contrast === 'low'
            ? 'bionic-highlight bionic-opacity'
            : 'bionic-highlight'
        }
      >
        {splitWord[0]}
      </span>
      <span
        className={
          selectedOptions.contrast !== 'standard' ? 'bionic-opacity' : 'none'
        }
      >
        {splitWord[1]}
      </span>
      &nbsp;
    </>
  );
};
