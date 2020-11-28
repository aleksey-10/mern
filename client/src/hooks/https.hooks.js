import { message } from 'antd';
import { useCallback, useEffect, useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (errorMessage) {
      message.error(errorMessage);
    }
  }, [errorMessage]);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);

    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      if (!response.ok) {
        throw (data || { message: 'Something went wrong' });
      }

      setLoading(false);

      return Promise.resolve(data);
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);

      if (e.errors) {
        setErrors(e.errors);
      }

      return Promise.reject(e);
    }
  }, [setLoading, setErrorMessage]);

  const clearErrors = useCallback(() => {
    setErrors(null);
  }, [setErrors]);

  return { loading, request, errors, clearErrors };
};
