export type TLoginRequestType = {
  email: string;
  password: string;
};

export interface IUseAuthStore {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}
