import { useState } from 'react';
import { useAsyncStorage } from '.';
const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useAsyncStorage('user');
  // eslint-disable-next-line no-unused-vars
  const [_, setToken] = useAsyncStorage('access_token');

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      //const { accessToken, email, displayName, phoneNumber } = await authService.login(credentials);
      setUser({ email, password });
      //setToken(accessToken);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setToken(null);
      setUser(null);
      //await authService.logout();
    } catch (err) {
      console.log('EROR LOGOUT', error);
    }
  };

  return { login, logout, user, loading, error };
};

export default useAuth;
