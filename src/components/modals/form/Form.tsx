import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { OptionCard } from '../../cards/optionCard';
import { FC } from 'react';
import { optionSelections } from '../../../utils/constants/defaults';
import {
  MIN_FONT_SIZE,
  MAX_FONT_SIZE,
  FONT_STEP,
} from '../../../utils/constants/defaults';
import { Output } from '../../output';
import { Button } from '../../reusable/button';
import { useCreateForm } from '../../../utils/hooks/useCreateForm';
import { Controller } from 'react-hook-form';

interface FormProps {
  id: string | null;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Form: FC<FormProps> = ({ id, onClose }) => {
  const {
    submit,
    methods,
    formtext,
    formFixation,
    formContrast,
    formFontSize,
  } = useCreateForm(onClose, id);
  const errors = methods.formState.errors;

  const updateOptions = (key: 'fixation' | 'contrast', value: string) => {
    methods.setValue(key, value);
  };

  const updateFontSize = (option: 'increase' | 'decrease') => {
    switch (option) {
      case 'increase':
        return (
          formFontSize < MAX_FONT_SIZE &&
          methods.setValue('fontSize', formFontSize + FONT_STEP)
        );
      case 'decrease':
        return (
          formFontSize > MIN_FONT_SIZE &&
          methods.setValue('fontSize', formFontSize - FONT_STEP)
        );
    }
  };

  const renderOptions = (
    version: 'fixation' | 'contrast',
    selectedVersion: string
  ) => {
    return (
      <>
        {optionSelections[`${version}`].map((el: string, idx: number) => (
          <div key={idx} onClick={() => updateOptions(version, el)}>
            <OptionCard
              option={version}
              optionTitle={el}
              contrast={el}
              isSelected={selectedVersion === el}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="modal-container">
      <div className="form">
        <Controller
          name="text"
          control={methods.control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <textarea
                {...field}
                className="form__input--text"
                placeholder="Enter your custom text"
                value={field.value.map((val) =>
                  val.replaceAll(/([.,?!:;]),/g, '$1\n')
                )}
                onChange={(e) => methods.setValue('text', [e.target.value])}
              />
              {errors.text && (
                <div className="form__error">{errors.text.message}</div>
              )}
            </>
          )}
        />
        <div className="form__options">
          <div>
            <p className="form__options--subtitle">Fixation: </p>
            <div className="center-vertical">
              {renderOptions('fixation', formFixation)}
            </div>
            {errors.fixation && (
              <div className="form__error mt-16">{errors.fixation.message}</div>
            )}
          </div>

          <div>
            <p className="form__options--subtitle">Contrast: </p>
            <div className="center-vertical">
              {renderOptions('contrast', formContrast)}
            </div>
          </div>

          <div>
            <p className="form__options--subtitle">Font size: </p>
            <div className="center-vertical direction-row">
              <Button
                icon={<FontAwesomeIcon icon={faMinus} />}
                variant="primary"
                buttonWidth="content"
                onClick={() => updateFontSize('decrease')}
              />
              <div className="center-vertical form__button--font-size">
                {formFontSize}
              </div>
              <Button
                icon={<FontAwesomeIcon icon={faPlus} />}
                variant="primary"
                buttonWidth="content"
                onClick={() => updateFontSize('increase')}
              />
            </div>
          </div>
        </div>

        <div className="form__preview--separator">Preview</div>
        {!!formtext.length ? (
          <div className="px-16">
            <Output
              selectedOptions={{
                fixation: formFixation,
                contrast: formContrast,
                fontSize: formFontSize,
                text: formtext,
              }}
              textLength="truncated"
              maxChars={150}
            />
          </div>
        ) : (
          <div className="form__preview--no-text">No text provided</div>
        )}

        <Button
          text="save"
          capitalize={true}
          variant="primary"
          buttonWidth="component"
          onClick={methods.handleSubmit(submit)}
        />
      </div>
    </div>
  );
};
