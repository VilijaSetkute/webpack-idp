import './styles.scss';
import { Form } from '../form/Form';
import { Output } from '../output/Output';
import { useEffect, useState } from 'react';
import { defaultText, defaultOptions } from '../../constants/defaults';
import { DefaultOptions } from '../../utils/models/model';

export const Reader = () => {
  const [text, setText] = useState<string>(defaultText);
  const [selectedOptions, setSelectedOptions] =
    useState<DefaultOptions>(defaultOptions);
  const [isContrastEnabled, setIsContrastEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (selectedOptions.fixation !== 'none') {
      setIsContrastEnabled(true);
    } else {
      setIsContrastEnabled(false);
    }
  }, [selectedOptions.fixation]);

  const stringToArray = (text: string) => {
    return text.split(' ');
  };

  return (
    <div className="reader-container">
      <Form
        setText={setText}
        setSelectedOptions={setSelectedOptions}
        isContrastEnabled={isContrastEnabled}
        selectedOptions={selectedOptions}
      />
      <Output selectedOptions={selectedOptions} text={stringToArray(text)} />
    </div>
  );
};
