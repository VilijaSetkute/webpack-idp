import { createContext } from 'react';
import { BionicItem, FilterOptions } from '../models/model';

type DataContextType = {
  filteredList: BionicItem[];
  bionicList: BionicItem[];
  setBionicList: React.Dispatch<React.SetStateAction<BionicItem[]>>;
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
};

export const DataContext = createContext<DataContextType>({
  filteredList: [],
  bionicList: [],
  setBionicList: () => {},
  setFilter: () => {},
});
