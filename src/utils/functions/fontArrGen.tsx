export interface FontValues<T extends number> {
  min: T;
  max: T;
  step: T;
}

type FontSizeArr<T extends number> = T[];

export const generateFontSizes = <T extends number>({
  min,
  max,
  step,
}: FontValues<T>): FontSizeArr<T> => {
  const sizes: T[] = [];
  let i: T = min;
  while (i <= max) {
    sizes.push(i);
    i = (i + step) as T;
  }
  return sizes;
};
