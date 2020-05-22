import { Typography } from '@material-ui/core';
import React from 'react';
import QueryVideos from '../lib/QueryVideos';

const VideosPage = () => {
  return (
    <>
      <Typography variant="h1" color="initial">
        This the the Video Page
      </Typography>
      <QueryVideos />
    </>
  );
};

export default VideosPage;
