import "./styles.css";
import WEBPACKLOGO from "./assets/webpack-logo.png";
import WEATHER from "./assets/Weather_icon_-_sunny.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        Edited, React Typescript Webpack project for IDP -{" "}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={WEBPACKLOGO} alt="Webpack logo" width="200" height="200" />
      <img src={WEATHER} alt="Webpack logo" width="200" height="200" />
      <ClickCounter />
    </>
  );
};
