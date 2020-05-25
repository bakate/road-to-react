import { Grid } from '@material-ui/core'
import React from 'react'
import useCuratedPix from '../components/Hooks/useCuratedPix'
import ImgMediaCard from '../components/PhotoCard'
import TextDescription from '../components/Text'

const Home = () => {
  const { data, error, status } = useCuratedPix()
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  return (
    <>
      <TextDescription
        variant="h6"
        infos="Last 8 Curated photos from pexels.
        Make your query and go visit Photos and Videos Pages"
      />

      <Grid container spacing={3}>
        {data.map(item => (
          <ImgMediaCard key={item.id} {...item} />
        ))}
      </Grid>
    </>
  )
}

export default Home
