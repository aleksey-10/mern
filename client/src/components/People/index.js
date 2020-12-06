import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/https.hooks';
import { Loader } from '../Loader';

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
      <Input prefix={<SearchOutlined />} />
      {loading
        ? <Loader />
        : people.map(({ _id, username }) => (
          <div key={_id} style={{ margin: '16px 0'}}>
            <Avatar icon={<UserOutlined />} size="large" /> {username}
          </div>
        ))
      }
    </div>
  );
};
