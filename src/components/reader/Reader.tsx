import './styles.scss';
import { useContext, useState } from 'react';
import { Dialog } from '../../utils/UI/dialog';
import { DataContext } from '../../utils/context/dataContext';
import { ReaderCard } from '../readerCard/ReaderCard';
import { Button } from '../../utils/UI/button';
import { Form } from '../form';

export const Reader = () => {
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const { bionicList } = useContext(DataContext);

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
          {bionicList.map((el) => (
            <ReaderCard key={el.id} listItem={el} />
          ))}
        </div>
        {showFormModal && (
          <Dialog onClose={() => setShowFormModal(false)}>
            <Form onClose={setShowFormModal} />
          </Dialog>
        )}
      </div>
    </div>
  );
};
