import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetailsPage = () => {
  const { id } = useParams();
  return (
    <Typography variant="h4" color="initial">
      The id regarding this Video is: {id}
    </Typography>
  );
};

export default VideoDetailsPage;
