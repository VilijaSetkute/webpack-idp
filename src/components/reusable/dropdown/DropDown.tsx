import { FC, useState } from 'react';
import './styles.scss';
import { capitalizeString } from '../../../utils/functions/capitalizeString';

interface DropdownProps {
  type: string;
  options: string[];
}

export const Dropdown: FC<DropdownProps> = ({ type, options }) => {
  const [isExpanded, setIsexpanded] = useState<boolean>(false);
  const [selection, setSelection] = useState<string>(capitalizeString(type));

  const dropdownSelect = (opt: string) => {
    const selectionText = `${capitalizeString(opt)} ${type}`;
    setSelection(selectionText);
    setIsexpanded(!isExpanded);
  };

  console.log(options, type);

  return (
    <div className="dropdown">
      <div
        className="dropdown--button"
        onClick={() => setIsexpanded(!isExpanded)}
      >
        {selection}
      </div>
      {isExpanded && (
        <div className="dropdown--options mt-4">
          {options.map((opt: string) => (
            <div
              key={opt}
              className={`dropdown--options--option ${
                selection === opt && 'selected'
              }`}
              onClick={() => dropdownSelect(opt)}
            >
              {capitalizeString(opt)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
