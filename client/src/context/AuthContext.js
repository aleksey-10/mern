import { createContext } from 'react';

export const AuthContext = createContext({
  token: '',
  userId: '',
  login: () => {},
  logout: () => {},
});
