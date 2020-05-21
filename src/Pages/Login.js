import { Typography } from '@material-ui/core';
import React from 'react';
import Form from '../components/Form';
import { useInfos } from '../state-management/context';

const UserPage = () => {
  const { user } = useInfos();

  return (
    <Typography variant="h2" color="initial" style={{ textAlign: 'center' }}>
      Sign {user.id ? 'In' : 'Up'}
      <Form />
    </Typography>
  );
};

export default UserPage;
