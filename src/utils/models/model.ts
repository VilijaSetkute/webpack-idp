export interface CardProps {
  option?: string;
  optionTitle: string;
  fixation?: string;
  contrast?: string;
  isSelected: boolean;
}

export interface BionicItem {
  id: string;
  date: string;
  fixation: string;
  contrast: string;
  fontSize: number;
  text: string[];
}

export type BionicItemForm = Omit<BionicItem, 'id' | 'date'>;
export type FilterOptions = Pick<BionicItem, 'fixation' | 'contrast'>;
