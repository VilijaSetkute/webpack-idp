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

export interface Joke {
  id: string;
  category: string;
  type: string;
  joke: string[];
  added: boolean;
}
