export interface FontValues {
  min: number;
  max: number;
  step: number;
}

type FontSizeArr = number[];

export const generateFontSizes = ({
  min,
  max,
  step,
}: FontValues): FontSizeArr => {
  const sizes = [];
  for (var i = min; i <= max; i += step) {
    sizes.push(i);
  }
  return sizes;
};
