import './styles.scss';
import { FC, useContext, useState } from 'react';
import { Output } from '../../output';
import { DataContext } from '../../../utils/context/dataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../reusable/button';
import React from 'react';
import { getJokes } from '../../../utils/functions/getJokes';
import { OptionCard } from '../../cards/optionCard';
import { BionicItem } from '../../../utils/models/model';
import { format } from 'date-fns';

interface Joke {
  id: string;
  category: string;
  type: string;
  joke: string[];
  added: boolean;
}

interface ReviewFormProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JokeForm: FC<ReviewFormProps> = ({ onClose }) => {
  const { bionicList, setBionicList } = useContext(DataContext);
  const [amount, setAmount] = useState<number>(0);
  const [jokeList, setJokeList] = useState<Joke[]>([]);

  const generateJokes = async (num: number) => {
    setAmount(num);
    const jokes = await getJokes(num);
    if (num > 1) {
      const transformedJokes: Joke[] = jokes.jokes.map((joke: any) => ({
        id: `id${Math.random() * 1000000000000000000}`,
        category: joke.category,
        type: joke.type,
        joke:
          joke.type === 'single' ? [joke.joke] : [joke.setup, joke.delivery],
        added: false,
      }));
      setJokeList(transformedJokes);
    } else {
      const singleJoke: Joke = {
        id: `id${Math.random() * 1000000000000000000}`,
        category: jokes.category,
        type: jokes.type,
        joke:
          jokes.type === 'single'
            ? [jokes.joke]
            : [jokes.setup, jokes.delivery],
        added: false,
      };
      setJokeList([singleJoke]);
    }
  };

  const addRandomText = (id: string, text: string[]) => {
    const updateList = jokeList.map((obj) => {
      if (obj.id === id) {
        return { ...obj, added: true };
      }
      return obj;
    });

    const data: BionicItem = {
      id: `id${Math.random() * 1000000000000000000}`,
      date: `${format(new Date(), 'yyyy-MM-dd hh:mm:ss')}`,
      fixation: 'standard',
      contrast: 'standard',
      fontSize: 16,
      text: text,
    };
    setJokeList(updateList);
    setBionicList((prevData) => [...prevData, data]);
  };

  return (
    <div className="modal-container">
      <div className="review">
        <FontAwesomeIcon
          icon={faXmark}
          size="xl"
          className="icon icon-close"
          onClick={() => onClose(false)}
        />

        <div className="reader-card--date">
          Choose how many jokes to generate
        </div>
        <div style={{ display: 'flex' }}>
          {[1, 2, 3, 4, 5].map((num, idx) => (
            <div key={idx} onClick={() => generateJokes(num)}>
              <OptionCard
                optionTitle={`${num}`}
                fixation={`${num}`}
                isSelected={amount === num}
              />
            </div>
          ))}
        </div>
        <div style={{ marginTop: '32px' }}>
          {!!jokeList.length &&
            jokeList.map((el, idx) => (
              <div
                key={idx}
                style={{
                  padding: '0 8px',
                  borderBottom: '1px solid grey',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ width: '90%' }}>
                  {el.joke.map((joke) => (
                    <Output
                      key={joke}
                      selectedOptions={{
                        fixation: 'standard',
                        contrast: 'standard',
                        fontSize: 16,
                        text: [joke],
                      }}
                      textLength="full"
                    />
                  ))}
                </div>
                <div style={{ width: '10%', textAlign: 'center' }}>
                  {el.added ? (
                    <FontAwesomeIcon icon={faCheck} color="teal" size="xl" />
                  ) : (
                    <Button
                      text="Add"
                      variant="primary"
                      buttonWidth="content"
                      onClick={() => addRandomText(el.id, el.joke)}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
