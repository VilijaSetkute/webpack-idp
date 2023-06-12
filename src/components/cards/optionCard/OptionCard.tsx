import { FC } from 'react';
import './styles.scss';
interface CardProps {
  option?: string;
  optionTitle: string;
  fixation?: string;
  contrast?: string;
  isSelected: boolean;
}

export const OptionCard: FC<CardProps> = ({
  option,
  optionTitle,
  fixation = 'none',
  contrast = 'standard',
  isSelected,
}) => {
  const evaluateFixation = (number: number) => {
    const exampleWord = 'Bionic';
    const splitList = [exampleWord.slice(0, number), exampleWord.slice(number)];
    return (
      <>
        <span style={{ fontWeight: 700 }}>{splitList[0]}</span>
        <span>{splitList[1]}</span>
      </>
    );
  };

  const formatFixationCard = (fixation: string) => {
    switch (fixation) {
      case 'none':
        return evaluateFixation(0);
      case 'low':
        return evaluateFixation(2);
      case 'standard':
        return evaluateFixation(3);
      case 'strong':
        return evaluateFixation(4);
      default:
        evaluateFixation(0);
    }
  };

  const formatContrastCard = (contrast: string) => {
    return (
      <>
        <span
          style={{ fontWeight: 700, opacity: contrast === 'low' ? 0.7 : 1 }}
        >
          Bio
        </span>
        <span style={{ opacity: contrast !== 'standard' ? 0.7 : 1 }}>nic</span>
      </>
    );
  };

  return (
    <div className={isSelected ? 'option-card--selected' : 'option-card'}>
      {option && (
        <div className="option-card__example">
          {option === 'fixation' && formatFixationCard(fixation)}
          {option === 'contrast' && formatContrastCard(contrast)}
        </div>
      )}
      <div
        className={option ? 'option-card__title' : 'option-card__title--big'}
      >
        {optionTitle}
      </div>
    </div>
  );
};
