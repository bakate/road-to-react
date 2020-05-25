import { Grid } from '@material-ui/core'
import React from 'react'
import useAllPhotos from '../components/Hooks/useAllPix'
import ImgMediaCard from '../components/PhotoCard'
import TextDescription from '../components/Text'
import { useInfos } from '../state-management/context'

const PhotosPage = () => {
  const { search } = useInfos()
  const { data, error, status } = useAllPhotos(search)
  console.log(search, 'from Photos')

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
          infos={`Here are your photos for : ${search.toUpperCase()}`}
        />
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
