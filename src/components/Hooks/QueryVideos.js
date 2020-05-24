import { Grid } from '@material-ui/core'
import React from 'react'
import { useQuery } from 'react-query'
import pexels from '../../lib/api'
import VideoMediaCard from '../VideoCard'

const QueryVideos = ({ searchVideos }) => {
  const fetcher = async (_, request) => {
    const {
      data: { videos },
    } = await pexels.get('/videos/search', {
      params: {
        page: 1,
        per_page: 18,
        query: request,
        min_width: 250,
        min_duration: 10,
        max_duration: 30,
      },
    })
    return videos
  }

  const { status, data, error } = useQuery(['allVidoes', searchVideos], fetcher)
  if (!searchVideos) {
    return <h2 style={{ textAlign: 'center' }}>Search For Something Papi</h2>
  }
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  if (data.length === 0) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        Sorry no videos for {searchVideos}
      </h2>
    )
  }
  return (
    <Grid container spacing={3}>
      {data.map(item => (
        <VideoMediaCard key={item.id} {...item} />
      ))}
    </Grid>
  )
}

export default QueryVideos
