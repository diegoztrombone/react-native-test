import React, { createContext, useContext } from 'react';
import { useAuth } from 'hooks';
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  login: () => null,
  logout: () => null,
};
const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
