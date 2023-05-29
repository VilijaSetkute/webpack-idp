import { FC } from 'react';
import './styles.scss';
import { applyReader } from '../../utils/helpers/applyReader';
import {
  BionicItem,
  BionicItemForm,
  OutputItem,
} from '../../utils/models/model';
import { stringToArray } from '../../utils/helpers/stringToArray';

interface Output {
  selectedOptions: OutputItem;
}

export const Output: FC<Output> = ({ selectedOptions }) => {
  const wordArray = Array.isArray(selectedOptions.text)
    ? selectedOptions.text
    : stringToArray(selectedOptions.text);
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
