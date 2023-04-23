import LOGO from '../../assets/Logo.svg';
import './styles.css';

export const Header = () => {
  return (
    <header>
      <img className="header-logo-image" src={LOGO} alt="logo" />
    </header>
  );
};
