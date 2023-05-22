export interface DefaultOptions {
  id: string;
  date: string;
  fixation?: string;
  contrast?: string;
  fontSize?: number;
  text: string[];
}

export interface CardProps {
  option: string;
  optionTitle: string;
  fixation?: string;
  contrast?: string;
  isSelected: boolean;
}

export interface BionicItem {
  id: string;
  date: string;
  fixation?: string;
  contrast?: string;
  fontSize?: number;
  text: string[];
}

// export interface BionicItemForm {
//   fixation: string;
//   contrast: string;
//   fontSize: number;
//   text: string;
// }

export type BionicItemForm = Omit<BionicItem, 'id' | 'date'>;
