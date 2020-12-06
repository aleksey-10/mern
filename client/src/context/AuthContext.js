import { createContext } from 'react';

export const AuthContext = createContext({
  token: '',
  userId: '',
  username: '',
  login: () => {},
  logout: () => {},
});
