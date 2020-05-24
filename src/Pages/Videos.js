import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useAllVideos from '../components/Hooks/useAllVideos'
import VideoMediaCard from '../components/VideoCard'
import { useInfos } from '../state-management/context'

const VideosPage = () => {
  const { search } = useInfos()

  const { status, data, error } = useAllVideos(search)

  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  if (data.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Sorry no videos for {search}</h2>
  }
  return (
    <>
      {!search && (
        <Typography
          variant="subtitle2"
          color="initial"
          style={{ textAlign: 'center' }}
        >
          Search For Something Papi
        </Typography>
      )}
      <Grid container spacing={3}>
        {data.map(item => (
          <VideoMediaCard key={item.id} {...item} />
        ))}
      </Grid>
    </>
  )
}

export default VideosPage
