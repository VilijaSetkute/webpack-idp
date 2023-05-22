import { createContext } from 'react';
import { BionicItem } from '../models/model';

type DataContextType = {
  bionicList: BionicItem[];
  setBionicList: React.Dispatch<React.SetStateAction<BionicItem[]>>;
};

export const DataContext = createContext<DataContextType>({
  bionicList: [],
  setBionicList: () => {},
});
