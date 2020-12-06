import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/https.hooks';
import { Loader } from '../Loader';
import styles from './styles.module.css';
import { List } from './components/List';

export const People = () => {
  const {loading, request} = useHttp();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    request('/api/people').then(response => {
      setPeople(response.people);
    });
  }, [request, setPeople]);

  return (
    <div>
      <Input prefix={<SearchOutlined />} className={styles.input} />
      {loading
        ? <Loader />
        : <List people={people} />
      }
    </div>
  );
};
