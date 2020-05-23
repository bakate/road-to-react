import { Button, Grid, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
    >
      <Typography variant="h3" color="initial">
        Tu fais du hors piste
      </Typography>
      <Link to="/">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          startIcon={<ArrowBack />}
        >
          Retour
        </Button>
      </Link>
    </Grid>
  )
}

export default Error
