import { Grid } from '@material-ui/core'
import React from 'react'
import useAllVideos from '../components/Hooks/useAllVideos'
import VideoMediaCard from '../components/VideoCard'
import { useInfos } from '../state-management/context'

const VideosPage = () => {
  const { search } = useInfos()
  const { status, data, error } = useAllVideos(search)

  if (!search) {
    return <h2 style={{ textAlign: 'center' }}>Search For Something Papi</h2>
  }
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  if (data.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Sorry no videos for {search}</h2>
  }
  return (
    <Grid container spacing={3}>
      {data.map(item => (
        <VideoMediaCard key={item.id} {...item} />
      ))}
    </Grid>
  )
}

export default VideosPage
