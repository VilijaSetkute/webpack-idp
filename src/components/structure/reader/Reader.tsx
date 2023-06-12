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
import { JokeForm } from '../../modals/jokeForm';
import { introText } from '../../../utils/constants/defaults';

export const Reader = () => {
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [showJokeModal, setJokeModal] = useState<boolean>(false);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [formId, setFormId] = useState<string | null>(null);
  const { filteredList, bionicList } = useContext(DataContext);

  useEffect(() => {
    autoResizeTextarea('form__input--text');
  }, [showFormModal]);

  const onClose = () => {
    showFormModal && setShowFormModal(false);
    showReviewModal && setShowReviewModal(false);
    showJokeModal && setJokeModal(false);
    setFormId(null);
  };

  const onEdit = (id: string) => {
    setFormId(id);
    setShowFormModal(true);
    setShowReviewModal(false);
  };

  const renderFilterOptions = (
    <>
      <div>Filter by:</div>
      <Dropdown
        type="fixation"
        options={getDropdownOptions(bionicList, 'fixation')}
      />
      <Dropdown
        type="contrast"
        options={getDropdownOptions(bionicList, 'contrast')}
      />
    </>
  );

  const renderCardBlock = (
    <>
      {!!bionicList.length ? (
        <div>
          <h3 className="reader__subtitle">Saved bionic reading</h3>
          <div className="reader__filters">{renderFilterOptions}</div>
          {!!filteredList.length ? (
            filteredList.map((el) => (
              <ReaderCard
                key={el.id}
                listItem={el}
                onSelect={setFormId}
                onOpenEdit={setShowFormModal}
                onOpenReview={setShowReviewModal}
              />
            ))
          ) : (
            <div className="reader__empty">No filter results</div>
          )}
        </div>
      ) : (
        <div className="reader__empty">No items created</div>
      )}
    </>
  );

  const renderModals = (
    <>
      {showFormModal && (
        <Dialog onClose={onClose}>
          <Form onClose={onClose} id={formId} />
        </Dialog>
      )}
      {showReviewModal && (
        <Dialog onClose={onClose}>
          <ReviewForm onClose={onClose} onEdit={onEdit} id={formId} />
        </Dialog>
      )}
      {showJokeModal && (
        <Dialog onClose={onClose}>
          <JokeForm onClose={onClose} />
        </Dialog>
      )}
    </>
  );

  return (
    <div className="reader-container">
      <div className="reader__intro">
        <h3>What is bionic reading</h3>
        <div>{introText}</div>
        <Button
          text="Try me out"
          variant="primary"
          buttonWidth="component"
          capitalize={true}
          weight={true}
          onClick={() => setShowFormModal(true)}
        />
        <div className="reader__random-button">
          <div>or</div>
          <Button
            text="Get some random text"
            variant="secondary"
            buttonWidth="content"
            capitalize={false}
            weight={true}
            onClick={() => setJokeModal(true)}
          />
        </div>
        {renderCardBlock}
        {renderModals}
      </div>
    </div>
  );
};
