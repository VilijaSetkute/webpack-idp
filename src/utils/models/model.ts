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

export interface JokesApi {
  category: string;
  type: 'single' | 'twopart';
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

export interface SingleJoke extends JokesApi {
  error: boolean;
}

export interface MultiJoke extends JokesApi {
  error: false;
  amount: number;
  jokes: JokesApi[];
}
