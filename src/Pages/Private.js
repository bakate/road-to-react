import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const PrivatePage = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="nowrap"
    >
      <Grid item>
        <Typography variant="h5" color="initial">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          odio, enim praesentium doloribus architecto fuga a voluptates dolor
          omnis quas?
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" color="initial">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          odio, enim praesentium doloribus architecto fuga a voluptates dolor
          omnis quas?
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PrivatePage;
