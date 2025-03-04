import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IUseAuthStore } from "../types";

export const useAuthStore = create(
  persist<IUseAuthStore>(
    (set) => ({
      token: null,
      isAuthenticated: false,
      login: (token) => set({ token, isAuthenticated: true }),
      logout: () => set({ token: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
