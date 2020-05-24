import { Typography } from '@material-ui/core'
import React from 'react'
import QueryVideos from '../components/Hooks/QueryVideos'
import { useInfos } from '../state-management/context'

const VideosPage = () => {
  const { search } = useInfos()
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        color="initial"
        style={{ textAlign: 'center', textTransform: 'capitalize' }}
      >
        {search ? `Here are your videos for: ${search.toUpperCase()}.` : null}
      </Typography>
      <QueryVideos searchVideos={search} />
    </>
  )
}

export default VideosPage
