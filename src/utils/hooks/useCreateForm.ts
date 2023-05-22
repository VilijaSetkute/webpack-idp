import { useForm } from 'react-hook-form';
import { BionicItem } from '../models/model';
import { useContext } from 'react';
import { DataContext } from '../context/dataContext';
import format from 'date-fns/format';

export const useCreateForm = () => {
  const { setBionicList } = useContext(DataContext);
  const methods = useForm<BionicItem>({
    defaultValues: {
      id: '',
      date: '',
      fixation: 'none',
      contrast: 'standard',
      fontSize: 16,
      text: [],
    },
  });

  const fixation = methods.watch('fixation');
  const contrast = methods.watch('contrast');
  const fontSize = methods.watch('fontSize');
  const text = methods.watch('text');

  const submit = () => {
    const data = {
      id: `${Math.random() * 1000000000000000}`,
      date: format(new Date(), 'yyyy-MM-dd'),
      fixation,
      contrast,
      fontSize,
      text,
    };
    setBionicList((prevData) => [...prevData, data]);
  };

  return { methods, submit };
};
