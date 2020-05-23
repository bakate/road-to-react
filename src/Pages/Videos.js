import { Typography } from '@material-ui/core'
import React from 'react'
import QueryVideos from '../lib/QueryVideos'
import { useInfos } from '../state-management/context'

const VideosPage = () => {
  const { search } = useInfos()
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        color="initial"
        style={{ textAlign: 'center' }}
      >
        Here are your videos for: <b>{search}</b>
      </Typography>
      <QueryVideos />
    </>
  )
}

export default VideosPage
