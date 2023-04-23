// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { OptionCard } from '../optionCard';
import { FC, useRef } from 'react';
import { defaultOptions, defaultText } from '../../constants/defaults';
import { FormProps } from '../../utils/models/model';

export const Form: FC<FormProps> = ({
  setText,
  setSelectedOptions,
  isContrastEnabled,
}) => {
  let customTextRef = useRef<HTMLTextAreaElement>(null);
  const updateText = () => {
    const useText = customTextRef.current?.value;
    useText && setText(useText);
  };
  const resetDefaultText = () => {
    setText(defaultText);
    if (customTextRef.current) {
      customTextRef.current.value = '';
    }
  };
  const updateOptions = (key: any, value: any) => {
    if (key === 'fixation' && value === 'none') {
      setSelectedOptions(defaultOptions);
    } else {
      setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    }
  };
  return (
    <div>
      <div>
        <div>
          <textarea ref={customTextRef} placeholder="Enter your custom text" />

          <div className="button-wrapper">
            <button className="button-spacing" onClick={updateText}>
              Update
            </button>
            <button onClick={resetDefaultText}>Reset</button>
          </div>
        </div>
      </div>
      <div className="form-option-title">Bionic reader options</div>
      <div className="form-options-group">
        <div className="flex-spacing">
          <p className="form-option-subtitle">Fixation: </p>
          <div className="center-vertical">
            <div onClick={() => updateOptions('fixation', 'none')}>
              <OptionCard
                option="fixation"
                optionTitle="none"
                fixation="none"
              />
            </div>

            <div onClick={() => updateOptions('fixation', 'low')}>
              <OptionCard option="fixation" optionTitle="low" fixation="low" />
            </div>

            <div onClick={() => updateOptions('fixation', 'standard')}>
              <OptionCard
                option="fixation"
                optionTitle="standard"
                fixation="standard"
              />
            </div>

            <div onClick={() => updateOptions('fixation', 'strong')}>
              <OptionCard
                option="fixation"
                optionTitle="strong"
                fixation="strong"
              />
            </div>
          </div>
        </div>

        {isContrastEnabled && (
          <div>
            <p className="form-option-subtitle">Contrast: </p>
            <div className="center-vertical">
              <div onClick={() => updateOptions('contrast', 'standard')}>
                <OptionCard
                  option="contrast"
                  optionTitle="standard"
                  contrast="standard"
                />
              </div>
              <div onClick={() => updateOptions('contrast', 'high')}>
                <OptionCard
                  option="contrast"
                  optionTitle="high"
                  contrast="high"
                />
              </div>
              <div onClick={() => updateOptions('contrast', 'low')}>
                <OptionCard
                  option="contrast"
                  optionTitle="low"
                  contrast="low"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
