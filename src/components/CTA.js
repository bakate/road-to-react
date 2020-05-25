import { Button } from '@material-ui/core'
import { ArrowBack, DirectionsRun } from '@material-ui/icons'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

const CTA = ({ infos, run, back }) => {
  const history = useHistory()
  return (
    <Button
      size="small"
      color="primary"
      variant="contained"
      style={{ textTransform: 'capitalize' }}
      onClick={back && (() => history.goBack())}
      startIcon={run ? <DirectionsRun /> : back ? <ArrowBack /> : ''}
    >
      {infos}
    </Button>
  )
}

CTA.propTypes = {
  infos: PropTypes.string.isRequired,
  run: PropTypes.bool,
  back: PropTypes.bool,
}

export default CTA
