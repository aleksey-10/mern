import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/https.hooks';
import { Loader } from '../Loader';
import { Card } from './components/Card';
import { Comments } from './components/Comments';

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { loading, request } = useHttp();
  const { username } = useParams();

  useEffect(() => {
    request(`/api/people/${username}`)
      .then(response => {
        setProfile(response.user);
      });
  }, [request, username, setProfile]);

  if (loading) {
    return <Loader />;
  }

  if (!profile) {
    return null;
  }

  return (
    <div>
      <Card {...profile} />
      <Comments />
    </div>
  );
};
