import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import useCuratedPix from '../components/Hooks/useCuratedPix'
import ImgMediaCard from '../components/PhotoCard'

const Home = () => {
  const { data, error, status } = useCuratedPix()
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        color="initial"
        style={{ textTransform: 'capitalize', textAlign: 'center' }}
      >
        latest and hottest photos from pexels
      </Typography>
      <Grid container spacing={3}>
        {data.map(item => (
          <ImgMediaCard key={item.id} {...item} />
        ))}
      </Grid>
    </>
  )
}

export default Home
