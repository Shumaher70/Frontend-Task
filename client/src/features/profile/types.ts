export interface IQuoteStatus {
  label: string;
  isLoading: boolean;
}

export interface IQuote {
  author: string;
  quote: string;
  [key: string]: string;
}

export interface IQuoteStore {
  quote: IQuote | null;
  setQuote: (quote: IQuote) => void;
}
