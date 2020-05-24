import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useAllPhotos from '../components/Hooks/useAllPix'
import ImgMediaCard from '../components/PhotoCard'
import { useInfos } from '../state-management/context'

const PhotosPage = () => {
  const { search } = useInfos()
  const { data, error, status } = useAllPhotos(search)
  if (!search) {
    return <p style={{ textAlign: 'center' }}>Search Something...</p>
  }
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

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
      {data && (
        <Typography
          variant="h4"
          gutterBottom
          color="initial"
          style={{ textAlign: 'center', textTransform: 'capitalize' }}
        >
          Here are your videos for: {search.toUpperCase()}.
        </Typography>
      )}
      <Grid container spacing={3}>
        {data.map(item => (
          <ImgMediaCard key={item.id} {...item} />
        ))}
      </Grid>
    </>
  )
}

export default PhotosPage
