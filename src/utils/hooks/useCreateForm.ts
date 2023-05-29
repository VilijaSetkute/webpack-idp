import { useForm } from 'react-hook-form';
import { BionicItem, BionicItemForm } from '../models/model';
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';
import format from 'date-fns/format';
import { defaultOptions } from '../../constants/defaults';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const fixationValidator = yup
  .string()
  .test(
    'selected',
    'Please choose fixation option',
    (value) => value !== 'none'
  )
  .required();

const formValidator = yup
  .object()
  .shape({
    fixation: fixationValidator,
    contrast: yup.string().required(),
    fontSize: yup.number().required(),
    text: yup.string().required('Please provide your text'),
  })
  .required();

export const useCreateForm = (
  onClose: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { setBionicList } = useContext(DataContext);
  const [selectedOptions, setSelectedOptions] =
    useState<BionicItemForm>(defaultOptions);

  const methods = useForm<BionicItemForm>({
    defaultValues: {
      fixation: 'none',
      contrast: 'standard',
      fontSize: 14,
      text: '',
    },
    resolver: yupResolver(formValidator),
    mode: 'all',
    shouldFocusError: true,
    shouldUnregister: false,
  });

  const formtext = methods.watch('text');
  const formFixation = methods.watch('fixation');
  const formContrast = methods.watch('contrast');
  const formFontSize = methods.watch('fontSize');
  console.log(methods.formState.errors);

  const submit = ({
    fixation: formFixation,
    contrast: formContrast,
    fontSize: formFontSize,
    text: formtext,
  }: BionicItemForm) => {
    const data: BionicItem = {
      id: `id${Math.random() * 1000000000000000000}`,
      date: `${format(new Date(), 'yyyy-MM-dd hh:mm:ss')}`,
      fixation: formFixation,
      contrast: formContrast,
      fontSize: formFontSize,
      text: formtext,
    };
    setBionicList((prevData) => [...prevData, data]);
    onClose(false);
  };

  return {
    submit,
    selectedOptions,
    setSelectedOptions,
    methods,
    formtext,
    formFixation,
    formContrast,
    formFontSize,
  };
};
