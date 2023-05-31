import './styles.scss';
import { FC, useContext } from 'react';
import { Output } from '../../output';
import { DataContext } from '../../../utils/context/dataContext';
import { Chip } from '../../reusable/chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../reusable/button';

interface ReviewFormProps {
  id: string | null;
  onEdit: (id: string) => void;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReviewForm: FC<ReviewFormProps> = ({ id, onEdit, onClose }) => {
  const { bionicList } = useContext(DataContext);

  const editItem = bionicList.filter((bionic) => bionic.id === id);

  return (
    <div className="review">
      <FontAwesomeIcon
        icon={faXmark}
        size="xl"
        className="icon icon-close"
        onClick={() => onClose(false)}
      />
      <div className="review-header">
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
          <Button
            text="Edit"
            icon={<FontAwesomeIcon icon={faPen} />}
            capitalize={false}
            variant="secondary"
            buttonWidth="component"
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
