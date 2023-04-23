export interface DefaultOptions {
  fixation: string;
  contrast: string;
}

export interface CardProps {
  option: string;
  optionTitle: string;
  fixation?: string;
  contrast?: string;
}

export interface FormProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<DefaultOptions>>;
  isContrastEnabled: boolean;
}
