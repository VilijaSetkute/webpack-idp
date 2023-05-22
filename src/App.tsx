import './styles.scss';
import { useState } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Reader } from './components/reader/Reader';
import { DataContext } from './utils/context/dataContext';
import { initialCard } from './constants/defaults';
import { BionicItem } from './utils/models/model';

export const App = () => {
  const [bionicList, setBionicList] = useState<BionicItem[]>([initialCard]);

  return (
    <DataContext.Provider value={{ bionicList, setBionicList }}>
      <div className="App">
        <Header />
        <Reader />
        <Footer />
      </div>
    </DataContext.Provider>
  );
};
