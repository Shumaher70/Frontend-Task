import { create } from "zustand";
import { IQuote, IQuoteStore } from "@/features/profile/types";

export const useQuoteStore = create<IQuoteStore>((set) => ({
  quote: null,
  setQuote: (quote: IQuote) => set({ quote }),
}));
