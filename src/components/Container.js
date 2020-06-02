import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    padding: '2rem 2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0',
    },
  },
}))

const Container = ({ children }) => {
  const classes = useStyles()
  return (
    <Paper component="div" className={classes.root}>
      {children}
    </Paper>
  )
}

export default Container
