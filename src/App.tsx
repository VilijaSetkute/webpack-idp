import "./styles.css";
import WEBPACKLOGO from "./assets/webpack-logo.png";
import WEATHER from "./assets/Weather_icon_-_sunny.svg";

export const App = () => {
  return (
    <>
      <h1>React Typescript Webpack project for IDP</h1>
      <img src={WEBPACKLOGO} alt="Webpack logo" width="200" height="200" />
      <img src={WEATHER} alt="Webpack logo" width="200" height="200" />
    </>
  );
};
