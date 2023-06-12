export const capitalizeString = <T extends string>(string: T): T => {
  return (string.charAt(0).toUpperCase() + string.slice(1)) as T;
};
