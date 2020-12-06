import { Spin } from 'antd';
import React from 'react';
import styles from './styles.module.css';

export const Loader = () => {
  return (
    <div className={styles.spinner}>
      <Spin size="large" style={{ width: '100%' }} />
    </div>
  );  
};
