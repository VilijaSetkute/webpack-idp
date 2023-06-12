import './styles.scss';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getJokes } from '../../../utils/functions/getJokes';
import { OptionCard } from '../../cards/optionCard';
import { Joke, MultiJoke, SingleJoke } from '../../../utils/models/model';
import { RandomTextCard } from '../../cards/randomTextCard';

interface ReviewFormProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JokeForm: FC<ReviewFormProps> = ({ onClose }) => {
  const [amount, setAmount] = useState<number>(0);
  const [jokeList, setJokeList] = useState<Joke[]>([]);

  const generateJokes = async (num: number) => {
    setAmount(num);
    const jokes = await getJokes(num);
    if (num > 1) {
      const jokeObj = jokes as MultiJoke;
      const transformedJokes: Joke[] = jokeObj.jokes.map((joke: any) => ({
        id: `id${Math.random() * 1000000000000000000}`,
        category: joke.category,
        type: joke.type,
        joke:
          joke.type === 'single' ? [joke.joke] : [joke.setup, joke.delivery],
        added: false,
      }));
      setJokeList(transformedJokes);
    } else {
      const jokeObj = jokes as SingleJoke;
      const singleJoke: Joke = {
        id: `id${Math.random() * 1000000000000000000}`,
        category: jokeObj.category,
        type: jokeObj.type,
        joke:
          jokeObj.type === 'single'
            ? [jokeObj.joke ?? '']
            : [jokeObj.setup ?? '', jokeObj.delivery ?? ''],
        added: false,
      };
      setJokeList([singleJoke]);
    }
  };

  const renderCountOptions = (jokesNum: number) => {
    const optionList = Array.from(
      { length: jokesNum },
      (_, index) => index + 1
    );
    return (
      <>
        {optionList.map((num, idx) => (
          <div key={idx} onClick={() => generateJokes(num)}>
            <OptionCard
              optionTitle={`${num}`}
              fixation={`${num}`}
              isSelected={amount === num}
            />
          </div>
        ))}
      </>
    );
  };

  const renderTextCards = (
    <>
      {!!jokeList.length &&
        jokeList.map((el, idx) => (
          <RandomTextCard
            key={idx}
            jokeList={jokeList}
            setJokeList={setJokeList}
            item={el}
          />
        ))}
    </>
  );

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
        <div className="display-flex">{renderCountOptions(5)}</div>
        <div className="mt-32">{renderTextCards}</div>
      </div>
    </div>
  );
};
