type OptionKeys = 'fixation' | 'contrast';

export const getDropdownOptions = <T, K extends keyof T & OptionKeys>(
  list: T[],
  key: K
): T[K][] => {
  const uniqueEntries = new Set(list.map((item) => item[key]));
  return Array.from(uniqueEntries);
};
