import { Button, Grid, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Grid
      container
      spacing={1}
      wrap="nowrap"
      justify="center"
      direction="column"
      alignItems="center"
      alignContent="center"
    >
      <Typography variant="h3" color="initial">
        Humm! You Seem Lost{' '}
        <span role="img" aria-label="crying">
          😢
        </span>
        !
      </Typography>
      <Link to="/">
        <Button
          size="large"
          color="secondary"
          variant="contained"
          startIcon={<ArrowBack />}
        >
          Retour
        </Button>
      </Link>
    </Grid>
  )
}

export default Error
