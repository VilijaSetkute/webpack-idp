type OptionKeys = 'fixation' | 'contrast';

export const getDropdownOptions = <T, K extends keyof T & OptionKeys>(
  list: T[],
  key: K
): T[K][] => {
  return list.map((item) => item[key]);
};
