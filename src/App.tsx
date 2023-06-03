import React, { useMemo } from 'react';
import './styles.scss';
import { useState } from 'react';
import { Header } from './components/structure/header/Header';
import { Footer } from './components/structure/footer/Footer';
import { Reader } from './components/structure/reader/Reader';
import { DataContext } from './utils/context/dataContext';
import { initialList } from '../src/utils/constants/defaults';
import { BionicItem, FilterOptions } from './utils/models/model';

export const App = () => {
  const [filter, setFilter] = useState<FilterOptions>({
    fixation: 'fixation',
    contrast: 'contrast',
  });
  const [bionicList, setBionicList] = useState<BionicItem[]>(initialList);

  const filteredList = useMemo(() => {
    let filtered = bionicList;
    if (filter.fixation !== 'fixation') {
      filtered = filtered.filter((el) => el.fixation === filter.fixation);
    }
    if (filter.contrast !== 'contrast') {
      filtered = filtered.filter((el) => el.contrast === filter.contrast);
    }
    return filtered;
  }, [filter, bionicList]);

  return (
    <DataContext.Provider
      value={{ filteredList, bionicList, setBionicList, setFilter }}
    >
      <div className="App">
        <Header />
        <Reader />
        <Footer />
      </div>
    </DataContext.Provider>
  );
};
