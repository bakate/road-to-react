import { Typography } from '@material-ui/core';
import React from 'react';
import Query from '../lib/QueryPix';

const PhotosPage = () => {
  return (
    <div>
      <Typography
        variant="h3"
        style={{ textAlign: 'center', marginBottom: '1rem' }}
        color="initial"
      >
        You Can also check the Video page
      </Typography>
      <Query />
    </div>
  );
};

export default PhotosPage;
