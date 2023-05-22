import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import { Chip } from '../../utils/UI/chip';
import { FC, useContext } from 'react';
import { DataContext } from '../../utils/context/dataContext';
import { BionicItem } from '../../utils/models/model';

interface CardProps {
  listItem: BionicItem;
}

export const ReaderCard: FC<CardProps> = ({ listItem }) => {
  const { bionicList, setBionicList } = useContext(DataContext);

  const onDelete = (id: string) => {
    const findId = bionicList.filter((el) => el.id !== id);
    setBionicList(findId);
  };

  return (
    <div className="reader-card-container">
      <div className="options-spacing">
        <div className="options-spacing">
          <div className="mr-16">Options:</div>
          {listItem.fixation && <Chip text={`Fixation ${listItem.fixation}`} />}
          {listItem.contrast && <Chip text={`Contrast ${listItem.contrast}`} />}
          {listItem.fontSize && (
            <Chip text={`Font size ${listItem.fontSize}`} />
          )}
        </div>
        <div className="center-vertical">
          {listItem.id === 'sample' && <div className="sample">Example</div>}
          <FontAwesomeIcon
            icon={faEye}
            size="lg"
            className="icon icon-view"
            onClick={() => console.log('view')}
          />
          <FontAwesomeIcon
            icon={faPen}
            size="lg"
            className="icon icon-edit"
            onClick={() => console.log('edit')}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            size="lg"
            className="icon icon-delete"
            onClick={() => onDelete(listItem.id)}
          />
        </div>
      </div>
      <div className="mb-16">Created: {listItem.date}</div>
      <div style={{ fontSize: listItem.fontSize ?? '16px' }}>
        {listItem.text}
      </div>
    </div>
  );
};
