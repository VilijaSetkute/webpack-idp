import './styles.scss';
import { FC, useContext } from 'react';
import { Output } from '../../output';
import { DataContext } from '../../../utils/context/dataContext';
import { Chip } from '../../reusable/chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface ReviewFormProps {
  id: string | null;
  onEdit: (id: string) => void;
}

export const ReviewForm: FC<ReviewFormProps> = ({ id, onEdit }) => {
  const { bionicList } = useContext(DataContext);

  const editItem = bionicList.filter((bionic) => bionic.id === id);

  return (
    <div className="review">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className="selection-spacing">
          {!!editItem[0].fixation && (
            <Chip text={`Fixation ${editItem[0].fixation}`} />
          )}
          {!!editItem[0].contrast && (
            <Chip text={`Contrast ${editItem[0].contrast}`} />
          )}
          {editItem[0].fontSize !== 14 && (
            <Chip text={`Font size ${editItem[0].fontSize}`} />
          )}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPen}
            size="lg"
            className="icon icon-edit"
            onClick={() => onEdit(id as string)}
          />
        </div>
      </div>
      <Output
        selectedOptions={{
          fixation: editItem[0].fixation,
          contrast: editItem[0].contrast,
          fontSize: editItem[0].fontSize,
          text: editItem[0].text,
        }}
        textLength="full"
      />
    </div>
  );
};
