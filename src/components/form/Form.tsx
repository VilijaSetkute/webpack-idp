import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { OptionCard } from '../optionCard';
import { FC, useRef, useState } from 'react';
import { defaultOptions } from '../../constants/defaults';
import { DefaultOptions } from '../../utils/models/model';
import { optionSelections } from '../../constants/defaults';
import {
  MIN_FONT_SIZE,
  MAX_FONT_SIZE,
  FONT_STEP,
} from '../../constants/defaults';
import { Output } from '../output';
import { Button } from '../../utils/UI/button';
import { useCreateForm } from '../../utils/hooks/useCreateForm';

export const Form: FC = () => {
  const [text, setText] = useState<string>('');
  const [textFontSize, setTextFontSize] = useState(16);
  const [selectedOptions, setSelectedOptions] =
    useState<DefaultOptions>(defaultOptions);
  let customTextRef = useRef<HTMLTextAreaElement>(null);
  const { submit, methods } = useCreateForm();

  const stringToArray = (text: string) => {
    return text.split(' ');
  };

  const updateText = () => {
    const useText = customTextRef.current?.value;
    useText && setText(useText);

    useText && methods.setValue('text', stringToArray(useText));
  };

  const updateOptions = (key: 'fixation' | 'contrast', value: string) => {
    if (key === 'fixation' && value === 'none') {
      setSelectedOptions(defaultOptions);
    } else {
      setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    }
    methods.setValue(`${key}`, value);
  };

  const increaseFontSize = () => {
    if (textFontSize < MAX_FONT_SIZE) {
      setTextFontSize(textFontSize + FONT_STEP);
    }
    methods.setValue('fontSize', textFontSize + FONT_STEP);
  };

  const decreaseFontSize = () => {
    if (textFontSize > MIN_FONT_SIZE) {
      setTextFontSize(textFontSize - FONT_STEP);
    }
    methods.setValue('fontSize', textFontSize - FONT_STEP);
  };

  return (
    <div className="form">
      <textarea
        className="form__input--text"
        ref={customTextRef}
        placeholder="Enter your custom text"
        onChange={updateText}
      />
      <div className="form__options">
        <div>
          <p className="form__options--subtitle">Fixation: </p>
          <div className="center-vertical">
            {optionSelections['fixation'].map((el) => (
              <div onClick={() => updateOptions('fixation', el)}>
                <OptionCard
                  option="fixation"
                  optionTitle={el}
                  fixation={el}
                  isSelected={selectedOptions.fixation === el}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="form__options--subtitle">Contrast: </p>
          <div className="center-vertical">
            {optionSelections['contrast'].map((el) => (
              <div onClick={() => updateOptions('contrast', el)}>
                <OptionCard
                  option="contrast"
                  optionTitle={el}
                  contrast={el}
                  isSelected={selectedOptions.contrast === el}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="form__options--subtitle">Font size: </p>
          <div className="center-vertical">
            <Button
              icon={<FontAwesomeIcon icon={faMinus} />}
              variant="primary"
              buttonWidth="content"
              onClick={decreaseFontSize}
            />
            <div className="center-vertical form__button--font-size">
              {textFontSize}
            </div>
            <Button
              icon={<FontAwesomeIcon icon={faPlus} />}
              variant="primary"
              buttonWidth="content"
              onClick={increaseFontSize}
            />
          </div>
        </div>
      </div>

      <div className="from__preview--separator">Preview</div>
      {!!text ? (
        <Output selectedOptions={selectedOptions} />
      ) : (
        <div className="from__preview--no-text">No text provided</div>
      )}

      <Button
        text="save"
        capitalize={true}
        variant="primary"
        buttonWidth="component"
        onClick={() => submit}
      />
    </div>
  );
};
