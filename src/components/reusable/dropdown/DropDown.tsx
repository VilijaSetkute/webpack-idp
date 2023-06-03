import { FC, useContext, useState } from 'react';
import './styles.scss';
import { capitalizeString } from '../../../utils/functions/capitalizeString';
import { DataContext } from '../../../utils/context/dataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '../dialog';

interface DropdownProps {
  type: string;
  options: string[];
}

export const Dropdown: FC<DropdownProps> = ({ type, options }) => {
  const [isExpanded, setIsexpanded] = useState<boolean>(false);
  const [selection, setSelection] = useState<string>(capitalizeString(type));
  const { setFilter } = useContext(DataContext);

  const dropdownSelect = (opt: string) => {
    const selectionText = `${capitalizeString(opt)} ${type}`;
    setSelection(selectionText);
    setIsexpanded(!isExpanded);
    setFilter((prevValue) => ({ ...prevValue, [type]: opt }));
  };

  const resetSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelection(capitalizeString(type));
    setFilter((prevValue) => ({ ...prevValue, [type]: `${type}` }));
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown--button"
        onClick={() => setIsexpanded(!isExpanded)}
      >
        {selection}{' '}
        {selection.toLowerCase() !== type && (
          <FontAwesomeIcon
            icon={faXmark}
            color="gray"
            size="lg"
            onClick={(e) => resetSelection(e)}
          />
        )}
      </div>
      {isExpanded && (
        <Dialog onClose={() => setIsexpanded(false)}>
          <div className="dropdown--options mt-4">
            {options.map((opt: string) => (
              <div
                key={opt}
                className={`dropdown--options--option ${
                  selection.toLowerCase().includes(opt) && 'selected'
                }`}
                onClick={() => dropdownSelect(opt)}
              >
                {capitalizeString(opt)}
              </div>
            ))}
          </div>
        </Dialog>
      )}
    </div>
  );
};
