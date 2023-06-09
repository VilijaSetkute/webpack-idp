import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import { Chip } from '../../reusable/chip';
import { FC, useContext } from 'react';
import { DataContext } from '../../../utils/context/dataContext';
import { BionicItem } from '../../../utils/models/model';
import { Output } from '../../output';
import React from 'react';

interface CardProps {
  listItem: BionicItem;
  onSelect: React.Dispatch<React.SetStateAction<string | null>>;
  onOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenReview: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReaderCard: FC<CardProps> = ({
  listItem,
  onSelect,
  onOpenEdit,
  onOpenReview,
}) => {
  const { filteredList, setBionicList } = useContext(DataContext);

  const onEdit = () => {
    onSelect(listItem.id);
    onOpenEdit(true);
  };

  const onReview = () => {
    onSelect(listItem.id);
    onOpenReview(true);
  };

  const onDelete = (id: string) => {
    const findId = filteredList.filter((el) => el.id !== id);
    setBionicList(findId);
  };

  const renderChips = (
    <>
      {<Chip text={`Fixation ${listItem.fixation}`} />}
      {<Chip text={`Contrast ${listItem.contrast}`} />}
      {listItem.fontSize !== 14 && (
        <Chip text={`Font size ${listItem.fontSize}`} />
      )}
    </>
  );

  const renderControls = (
    <>
      {listItem.id === 'sample' && (
        <div className="reader-card__sample">Example</div>
      )}
      <div>
        <FontAwesomeIcon
          style={{ marginRight: '8px' }}
          icon={faEye}
          size="lg"
          className="icon icon-view"
          onClick={() => onReview()}
        />
        <FontAwesomeIcon
          style={{ marginRight: '8px' }}
          icon={faPen}
          size="lg"
          className="icon icon-edit"
          onClick={() => onEdit()}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          size="lg"
          className="icon icon-delete"
          onClick={() => onDelete(listItem.id)}
        />
      </div>
    </>
  );

  return (
    <div className="reader-card-container">
      <div className="reader-card__header--spacing">
        <div className="reader-card__options--spacing">{renderChips}</div>
        <div className="center-vertical direction-column">{renderControls}</div>
      </div>
      <div className="reader-card__date">{listItem.date}</div>
      <Output
        selectedOptions={{
          fixation: listItem.fixation,
          contrast: listItem.contrast,
          fontSize: listItem.fontSize || 16,
          text: listItem.text,
        }}
        textLength="truncated"
        maxChars={150}
      />
    </div>
  );
};
