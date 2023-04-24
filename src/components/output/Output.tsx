import { FC, useEffect, useState } from 'react';
import { MIN_FONT_SIZE, MAX_FONT_SIZE } from '../../constants/defaults';
import INCREASE from '../../assets/FontIncrease.svg';
import DECREASE from '../..//assets/FontDecrease.svg';
import RESET from '../..//assets/ResetIcon.svg';
import './styles.css';
import { applyReader } from '../../utils/helpers/applyReader';
import { DefaultOptions } from '../../utils/models/model';

interface Output {
  selectedOptions: DefaultOptions;
  text: string[];
}

export const Output: FC<Output> = ({ selectedOptions, text }) => {
  const [textFontSize, setTextFontSize] = useState(16);

  const increaseFontSize = () => {
    if (textFontSize < MAX_FONT_SIZE) {
      setTextFontSize(textFontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (textFontSize > MIN_FONT_SIZE) {
      setTextFontSize(textFontSize - 2);
    }
  };

  return (
    <div>
      <div className="output__title">Text options</div>
      <div className="flex-horizontal-end">
        <div>
          <img
            className="output_resizer output_resizer--left"
            src={INCREASE}
            alt="Font increase"
            height={20}
            onClick={increaseFontSize}
          />
          <img
            className="output_resizer"
            src={DECREASE}
            alt="Font decrease"
            height={20}
            onClick={decreaseFontSize}
          />
          <img
            className="output_resizer output_resizer--right"
            src={RESET}
            alt="Reset font change"
            height={20}
            onClick={() => setTextFontSize(16)}
          />
        </div>
      </div>
      <div style={{ fontSize: textFontSize }}>
        {text.map((word, idx) => (
          <span key={idx} className="inline-block">
            {applyReader(selectedOptions, word)}
          </span>
        ))}
      </div>
    </div>
  );
};
