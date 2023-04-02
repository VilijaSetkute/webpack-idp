import './styles.css';
import { Header } from './components/Header';
import { TimeComparison } from './components/TimeComparison';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <TimeComparison />
    </div>
  );
};
