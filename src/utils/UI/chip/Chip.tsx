import { FC } from 'react';
import './styles.scss';

interface ChipProps {
  text: string;
}

export const Chip: FC<ChipProps> = ({ text }) => {
  return <div className="chip-box">{text}</div>;
};
