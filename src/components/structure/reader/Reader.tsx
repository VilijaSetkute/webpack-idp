import './styles.scss';
import { useContext, useEffect, useState } from 'react';
import { Dialog } from '../../reusable/dialog';
import { DataContext } from '../../../utils/context/dataContext';
import { ReaderCard } from '../../cards/readerCard/ReaderCard';
import { Button } from '../../reusable/button';
import { Form } from '../../modals/form';
import { ReviewForm } from '../../modals/reviewForm';
import { autoResizeTextarea } from '../../../utils/functions/autoResizeTextarea';
import { Dropdown } from '../../reusable/dropdown';
import { getDropdownOptions } from '../../../utils/functions/getDropdownOptions';

export const Reader = () => {
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [formId, setFormId] = useState<string | null>(null);
  const { filteredList, bionicList } = useContext(DataContext);

  useEffect(() => {
    autoResizeTextarea('form__input--text');
  }, [showFormModal]);

  const onClose = () => {
    showFormModal && setShowFormModal(false);
    showReviewModal && setShowReviewModal(false);
    setFormId(null);
  };

  const onEdit = (id: string) => {
    setFormId(id);
    setShowFormModal(true);
    setShowReviewModal(false);
  };

  return (
    <div className="reader-container">
      <div className="reader-intro">
        <h3>What is bionic reading</h3>
        <div>
          In a digital world dominated by shallow forms of reading, Bionic
          reading aims to encourage a more in-depth reading and understanding of
          written content by facilitating the reading process by guiding the
          eyes through text with artificial fixation points.
        </div>
        <Button
          text="Try me out"
          variant="primary"
          buttonWidth="component"
          capitalize={true}
          weight={true}
          onClick={() => setShowFormModal(true)}
        />
        <div>
          <h3 className="reader--subtitle">Saved bionic reading</h3>
          <div className="reader--filters">
            <div>Filter by:</div>
            <Dropdown
              type="fixation"
              options={getDropdownOptions(bionicList, 'fixation')}
            />
            <Dropdown
              type="contrast"
              options={getDropdownOptions(bionicList, 'contrast')}
            />
          </div>
          {filteredList.map((el) => (
            <ReaderCard
              key={el.id}
              listItem={el}
              onSelect={setFormId}
              onOpenEdit={setShowFormModal}
              onOpenReview={setShowReviewModal}
            />
          ))}
        </div>
        {showFormModal && (
          <Dialog onClose={onClose}>
            <Form onClose={onClose} id={formId} />
          </Dialog>
        )}
        {showReviewModal && (
          <Dialog onClose={onClose}>
            <ReviewForm id={formId} onEdit={onEdit} onClose={onClose} />
          </Dialog>
        )}
      </div>
    </div>
  );
};
