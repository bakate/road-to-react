import { makeStyles } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'row no-wrap',
    margin: theme.spacing(2),
  },
}))

const Paginate = ({ count, onChange, page }) => {
  const classes = useStyles()
  return (
    <Pagination
      className={classes.root}
      count={count}
      showLastButton
      hidePrevButton
      hideNextButton
      showFirstButton
      color="primary"
      page={page}
      variant="outlined"
      onChange={onChange}
    />
  )
}

Paginate.propTypes = {
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

export default Paginate
