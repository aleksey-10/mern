import { UserOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export const List = ({ people }) => {
  const { userId } = useContext(AuthContext);

  if (!people?.length) {
    return <h2>No people</h2>;
  }

  return (
    <Row gutter={24}>
      {people.map(({ _id, username }) => (
        <Col key={_id}>
          <NavLink to={`/people/${username}`}>
            <Card
              className={styles.card}
              title={<Avatar icon={<UserOutlined />} size={80} />}
            >
              <h3>{`${username}${userId === _id ? ' (you)' : ''}`}</h3>
            </Card>
          </NavLink>
        </Col>
      ))}
    </Row>
  );
};
