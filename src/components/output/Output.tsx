import { FC } from 'react';
import './styles.scss';
import { applyReader } from '../../utils/functions/applyReader';
import { BionicItemForm } from '../../utils/models/model';
import { stringToArray } from '../../utils/functions/stringToArray';

interface Output {
  selectedOptions: BionicItemForm;
  textLength: 'full' | 'truncated';
  maxChars?: number;
}

export const Output: FC<Output> = ({
  selectedOptions,
  textLength,
  maxChars,
}) => {
  const fullArray = stringToArray(selectedOptions.text);
  const maxWords = maxChars || selectedOptions.text.length;
  let wordCount = 0;
  const truncatedArray = [];

  for (const word of fullArray) {
    if (wordCount + word.length <= maxWords) {
      truncatedArray.push(word);
      wordCount += word.length;
    }
  }

  const wordArray = textLength === 'full' ? fullArray : truncatedArray;

  return (
    <div
      className="output__spacing"
      style={{ fontSize: selectedOptions.fontSize }}
    >
      {wordArray.map((word, idx) => (
        <span key={idx} className="inline-block">
          {applyReader(selectedOptions, word)}
        </span>
      ))}
      {maxChars &&
        textLength === 'truncated' &&
        selectedOptions.text.length > maxChars && <span>...</span>}
    </div>
  );
};
