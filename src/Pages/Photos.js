import { Typography } from '@material-ui/core'
import React from 'react'
import Query from '../lib/QueryPix'
import { useInfos } from '../state-management/context'

const PhotosPage = () => {
  const { search } = useInfos()
  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        style={{ textAlign: 'center', marginBottom: '1rem' }}
        color="initial"
      >
        Here are Your Pictures for: <b>{search}</b>.<br /> Check Also the Video
        Page
      </Typography>
      <Query />
    </div>
  )
}

export default PhotosPage
