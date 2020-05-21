import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useParams } from 'react-router-dom';

const PhotoDetailsPage = () => {
  const { id } = useParams();
  return (
    <Typography variant="h4" color="initial">
      The id regarding this Photo is: {id}
    </Typography>
  );
};

export default PhotoDetailsPage;
