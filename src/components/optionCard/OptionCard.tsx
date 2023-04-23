import { FC } from 'react';
import './styles.css';
import { CardProps } from '../../utils/models/model';
import { exampleWord } from '../../constants/defaults';

export const OptionCard: FC<CardProps> = ({
  option,
  optionTitle,
  fixation = 'none',
  contrast = 'standard',
}) => {
  const evaluateFixation = (number: any) => {
    const splitList = [exampleWord.slice(0, number), exampleWord.slice(number)];
    return (
      <>
        <span style={{ fontWeight: 700 }}>{splitList[0]}</span>
        <span>{splitList[1]}</span>
      </>
    );
  };

  const formatContrastCard = (contrast: any) => {
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

  const formatFixationCard = (fixation: any) => {
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

  return (
    <div className="form-option-card">
      <div className="form-option-card-example">
        {option === 'fixation' && formatFixationCard(fixation)}
        {option === 'contrast' && formatContrastCard(contrast)}
      </div>
      <div className="form-option-card-title">{optionTitle}</div>
    </div>
  );
};
