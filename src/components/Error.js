import { Grid } from '@material-ui/core'
import React from 'react'
import CTA from './CTA'
import TextDescription from './Text'

const Error = () => {
  return (
    <Grid
      container
      spacing={1}
      justify="center"
      direction="column"
      alignItems="stretch"
      alignContent="center"
    >
      <TextDescription infos="Humm! You Seem Lost" />

      <CTA infos="Back" back />
    </Grid>
  )
}

export default Error
