import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const TextDescription = ({ variant, infos }) => {
  return (
    <Typography
      variant={variant}
      gutterBottom
      color="initial"
      style={{ textTransform: 'capitalize', textAlign: 'center' }}
    >
      {infos}
    </Typography>
  )
}
TextDescription.defaultProps = {
  infos: 'search for something',
  variant: 'h5',
}

TextDescription.propTypes = {
  infos: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default TextDescription
