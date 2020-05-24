import { Grid } from '@material-ui/core'
import React from 'react'
import { useQuery } from 'react-query'
import pexels from '../../lib/api'
import ImgMediaCard from '../PhotoCard'

const QueryAllPix = ({ search }) => {
  const fetcher = async (_, request) => {
    const { data } = await pexels.get('/v1/search', {
      params: {
        page: 1,
        per_page: 16,
        query: request,
      },
    })

    return data.photos
  }

  const { data, error, status } = useQuery(['allPix', search], fetcher)
  if (!search) {
    return <p style={{ textAlign: 'center' }}>Search Something...</p>
  }
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  return (
    <Grid container spacing={3}>
      {data.map(item => (
        <ImgMediaCard key={item.id} {...item} />
      ))}
    </Grid>
  )
}

export default QueryAllPix
