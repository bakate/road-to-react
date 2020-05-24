import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'

const PrivatePage = () => {
  return (
    <Grid
      container
      spacing={1}
      wrap="nowrap"
      direction="row"
      justify="flex-start"
      alignContent="stretch"
      alignItems="flex-start"
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
  )
}

export default PrivatePage
