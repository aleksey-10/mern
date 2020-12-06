import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

  const STORAGE_NAME = 'userData';

  const login = useCallback((token, userId, username) => {
    setToken(token);
    setUserId(userId);
    setUsername(username)

    localStorage.setItem(STORAGE_NAME, JSON.stringify({ token, userId, username }));
  }, [setToken, setUserId]);

  const logout = useCallback(() => {
    setToken('');
    setUserId('');
    setUsername('');

    localStorage.removeItem(STORAGE_NAME);
  }, [setToken, setUserId]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_NAME));

    if (data && data.token) {
      login(data.token, data.userId, data.username);
    }
  }, [login]);

  return { login, logout, token, userId, username };
};
