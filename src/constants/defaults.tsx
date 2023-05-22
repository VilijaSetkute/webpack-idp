import { generateFontSizes } from '../utils/helpers/fontArrGen';

export const exampleWord = 'Bionic';
export const defaultText =
  'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic reading aims to encourage a more in-depth reading and understanding of written content.';

export const MIN_FONT_SIZE = 16;
export const MAX_FONT_SIZE = 30;
export const FONT_STEP = 2;

const fonts = generateFontSizes({
  min: MIN_FONT_SIZE,
  max: MAX_FONT_SIZE,
  step: FONT_STEP,
});

export const defaultOptions = {
  id: '0',
  date: '2023-05-22',
  fixation: 'none',
  contrast: 'standard',
  fontSize: 16,
  text: [],
};

export const optionSelections = {
  fixation: ['none', 'low', 'standard', 'strong'],
  contrast: ['standard', 'low', 'high'],
  size: fonts,
};

export const defaultBionicText: JSX.Element = (
  <div>
    <span className="inline-block">
      <span className="bionic-highlight">Bio</span>
      <span className="none">nic</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">Read</span>
      <span className="none">ing</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">i</span>
      <span className="none">s</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight"></span>
      <span className="none">a</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">n</span>
      <span className="none">ew</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">met</span>
      <span className="none">hod</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">facili</span>
      <span className="none">tating</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">t</span>
      <span className="none">he</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">read</span>
      <span className="none">ing</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">proc</span>
      <span className="none">ess</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">b</span>
      <span className="none">y</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">guid</span>
      <span className="none">ing</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">t</span>
      <span className="none">he</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">ey</span>
      <span className="none">es</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">thro</span>
      <span className="none">ugh</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">te</span>
      <span className="none">xt</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">wi</span>
      <span className="none">th</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">artif</span>
      <span className="none">icial</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">fixa</span>
      <span className="none">tion</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">poin</span>
      <span className="none">ts.</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">A</span>
      <span className="none">s</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight"></span>
      <span className="none">a</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">resu</span>
      <span className="none">lt,</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">t</span>
      <span className="none">he</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">rea</span>
      <span className="none">der</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">i</span>
      <span className="none">s</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">on</span>
      <span className="none">ly</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">focu</span>
      <span className="none">sing</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">o</span>
      <span className="none">n</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">t</span>
      <span className="none">he</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">highli</span>
      <span className="none">ghted</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">init</span>
      <span className="none">ial</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">lett</span>
      <span className="none">ers</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">a</span>
      <span className="none">nd</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">le</span>
      <span className="none">ts</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">t</span>
      <span className="none">he</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">bra</span>
      <span className="none">in</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">cen</span>
      <span className="none">ter</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">comp</span>
      <span className="none">lete</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">t</span>
      <span className="none">he</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">wor</span>
      <span className="none">d.</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">I</span>
      <span className="none">n</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight"></span>
      <span className="none">a</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">digi</span>
      <span className="none">tal</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">wor</span>
      <span className="none">ld</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">domin</span>
      <span className="none">ated</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">b</span>
      <span className="none">y</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">shal</span>
      <span className="none">low</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">for</span>
      <span className="none">ms</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">o</span>
      <span className="none">f</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">read</span>
      <span className="none">ing,</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">Bio</span>
      <span className="none">nic</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">read</span>
      <span className="none">ing</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">ai</span>
      <span className="none">ms</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">t</span>
      <span className="none">o</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">encou</span>
      <span className="none">rage</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight"></span>
      <span className="none">a</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">mo</span>
      <span className="none">re</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">in-d</span>
      <span className="none">epth</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">read</span>
      <span className="none">ing</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">a</span>
      <span className="none">nd</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">underst</span>
      <span className="none">anding</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">o</span>
      <span className="none">f</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">writ</span>
      <span className="none">ten</span>&nbsp;
    </span>
    <span className="inline-block">
      <span className="bionic-highlight">conte</span>
      <span className="none">nt.</span>&nbsp;
    </span>
  </div>
);

export const defaultBionicText2: string[] = [
  'this',
  'is',
  'a',
  'sample',
  'text',
];

export const initialCard = {
  id: 'sample',
  date: '2023-05-19',
  fixation: 'standard',
  contrast: 'standard',
  fontSize: 20,
  text: defaultBionicText2,
};
