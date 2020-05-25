import { Grid } from '@material-ui/core'
import React from 'react'
import useAllVideos from '../components/Hooks/useAllVideos'
import TextDescription from '../components/Text'
import VideoMediaCard from '../components/VideoCard'
import { useInfos } from '../state-management/context'

const VideosPage = () => {
  const { search } = useInfos()

  const { status, data, error } = useAllVideos(search)

  if (!search.length) {
    return <TextDescription />
  }
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  return (
    <>
      {data.length > 0 && (
        <TextDescription
          infos={`Here are your videos for : ${search.toUpperCase()}`}
        />
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
