import './styles.scss';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Reader } from './components/reader/Reader';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Reader />
      <Footer />
    </div>
  );
};
