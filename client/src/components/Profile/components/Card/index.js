import { UserOutlined } from '@ant-design/icons';
import { Card as AntCard, Avatar } from 'antd';
import React from 'react';
import styles from './styles.module.css';

export const Card = ({ username }) => {
  return (
    <AntCard
      className={styles.card}
      title={<Avatar icon={<UserOutlined />} size={96} />}
    >
      <h2>{username}</h2>
    </AntCard>
  );
};
