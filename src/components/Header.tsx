import HAPPYTEAM from '../assets/HappyTeam.svg';

export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '24px',
      }}
    >
      <div className="header-image-box">
        <img className="header-image" src={HAPPYTEAM} alt="Happy team" />
      </div>
      <h1>Buddy timing</h1>
    </div>
  );
};
