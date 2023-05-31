import LOGO from '../../../assets/Logo.svg';
import './styles.scss';

export const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LOGO} alt="logo" />
    </header>
  );
};
