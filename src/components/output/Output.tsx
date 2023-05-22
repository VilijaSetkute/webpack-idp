import { FC } from 'react';
import './styles.scss';
import { applyReader } from '../../utils/helpers/applyReader';
import { BionicItem } from '../../utils/models/model';

interface Output {
  selectedOptions: BionicItem;
}

export const Output: FC<Output> = ({ selectedOptions }) => {
  return (
    <div
      className="output__spacing"
      style={{ fontSize: selectedOptions.fontSize }}
    >
      {selectedOptions.text.map((word, idx) => (
        <span key={idx} className="inline-block">
          {applyReader(selectedOptions, word)}
        </span>
      ))}
    </div>
  );
};
