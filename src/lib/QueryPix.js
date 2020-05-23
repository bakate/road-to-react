import { Grid } from '@material-ui/core'
import React from 'react'
import { useQuery } from 'react-query'
import ImgMediaCard from '../components/PhotoCard'
import { useInfos } from '../state-management/context'
import pexels from './api'

const Query = () => {
  const { search, setPix } = useInfos()

  const fetcher = async request => {
    const { data } = await pexels.get('/v1/search', {
      params: {
        query: request,
        per_page: 16,
        page: 1,
      },
    })
    setPix(data.photos)
    return data.photos
  }

  const { status, data, error } = useQuery(search, fetcher)
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  if (!data) {
    return <h2 style={{ textAlign: 'center' }}>Search Something Papi</h2>
  }
  if (data.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Sorry no pix for {search}</h2>
  }
  return (
    <Grid container spacing={3}>
      {data.map(item => (
        <ImgMediaCard key={item.id} {...item} />
      ))}
    </Grid>
  )
}

export default Query
