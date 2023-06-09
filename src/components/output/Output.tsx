import { FC } from 'react';
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
  const fullArray = selectedOptions.text.map((parapgraph) =>
    stringToArray(parapgraph)
  );

  const truncatedArray = () => {
    if (maxChars) {
      const truncated = fullArray[0].slice(
        0,
        fullArray[0].reduce((acc, cur) => {
          if (acc + cur.length <= maxChars) {
            acc += cur.length;
          }
          return acc;
        }, 0)
      );
      return [truncated];
    }
    return [];
  };

  const wordArray = textLength === 'full' ? fullArray : truncatedArray();

  const renderOutput = () =>
    wordArray.map((par: string[], idx: number) => (
      <div key={idx} className="mb-16">
        {par.map((word: string, idx: number) => (
          <span key={idx} className="inline-block">
            {applyReader(selectedOptions, word)}
          </span>
        ))}
      </div>
    ));

  return (
    <div className="my-16" style={{ fontSize: selectedOptions.fontSize }}>
      {renderOutput()}
      {maxChars &&
        textLength === 'truncated' &&
        selectedOptions.text[0].length > maxChars && <span>...</span>}
    </div>
  );
};
