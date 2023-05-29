import { FC } from 'react';
import './styles.scss';
import { applyReader } from '../../utils/helpers/applyReader';
import { BionicItemForm } from '../../utils/models/model';
import { stringToArray } from '../../utils/helpers/stringToArray';

interface Output {
  selectedOptions: BionicItemForm;
}

export const Output: FC<Output> = ({ selectedOptions }) => {
  const wordArray = stringToArray(selectedOptions.text);
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
    </div>
  );
};
