import { FC } from 'react';
import './styles.scss';

type Variant = 'primary' | 'secondary';
type ButtonWidth = 'content' | 'component';

interface ButtonProps {
  text?: string;
  icon?: JSX.Element;
  variant: Variant;
  buttonWidth: ButtonWidth;
  capitalize?: boolean;
  weight?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  text,
  icon,
  variant,
  buttonWidth,
  capitalize = false,
  weight = false,
  onClick,
}) => {
  return (
    <button
      className={`custom-button ${variant} ${buttonWidth}`}
      style={{
        fontWeight: weight ? 'bold' : 'initial',
      }}
      onClick={onClick}
    >
      {capitalize && text ? text.toUpperCase() : text}
      {icon && <span>&nbsp; {icon}</span>}
    </button>
  );
};
