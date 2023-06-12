import React, { FC, useContext } from 'react';
import { Output } from '../../output/Output';
import { Button } from '../../reusable/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../utils/context/dataContext';
import { BionicItem, Joke } from '../../../utils/models/model';
import { format } from 'date-fns';
import './styles.scss';
import '../../../_colors.scss';

interface JokeProp {
  jokeList: Joke[];
  setJokeList: React.Dispatch<React.SetStateAction<Joke[]>>;
  item: Joke;
}

export const RandomTextCard: FC<JokeProp> = ({
  jokeList,
  setJokeList,
  item,
}) => {
  const { setBionicList } = useContext(DataContext);

  const addRandomText = (id: string, text: string[]) => {
    const updateList = jokeList.map((obj: Joke) => {
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

  const renderJokeLines = (item: Joke) => {
    return item.joke.map((joke) => (
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
    ));
  };

  return (
    <div className="random-card">
      <div className="random-card--text">{renderJokeLines(item)}</div>
      <div className="random-card--control">
        {item.added ? (
          <FontAwesomeIcon className="icon-check" icon={faCheck} size="xl" />
        ) : (
          <Button
            text="Add"
            variant="primary"
            buttonWidth="content"
            onClick={() => addRandomText(item.id, item.joke)}
          />
        )}
      </div>
    </div>
  );
};
