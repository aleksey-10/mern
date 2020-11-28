import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const STORAGE_NAME = 'userData';

  const login = useCallback((token, userId) => {
    setToken(token);
    setUserId(userId);

    localStorage.setItem(STORAGE_NAME, JSON.stringify({ token, userId }));
  }, [setToken, setUserId]);

  const logout = useCallback(() => {
    setToken('');
    setUserId('');

    localStorage.removeItem(STORAGE_NAME);
  }, [setToken, setUserId]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_NAME));

    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
};
