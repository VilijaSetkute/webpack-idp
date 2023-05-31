import { generateFontSizes } from '../functions/fontArrGen';

export const exampleWord = 'Bionic';
export const defaultText =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic reading aims to encourage a more in-depth reading and understanding of written content.';

export const MIN_FONT_SIZE = 14;
export const MAX_FONT_SIZE = 30;
export const FONT_STEP = 2;

const fonts = generateFontSizes({
  min: MIN_FONT_SIZE,
  max: MAX_FONT_SIZE,
  step: FONT_STEP,
});

export const defaultOptions = {
  fixation: 'none',
  contrast: 'standard',
  fontSize: 16,
  text: '',
};

export const optionSelections = {
  fixation: ['none', 'low', 'standard', 'strong'],
  contrast: ['standard', 'low', 'high'],
  size: fonts,
};

export const initialCard = {
  id: 'sample',
  date: '2023-05-26 09:46:28',
  fixation: 'standard',
  contrast: 'standard',
  fontSize: 20,
  text: defaultText,
};
