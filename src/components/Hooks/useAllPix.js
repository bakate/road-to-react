import { Grid } from '@material-ui/core'
import React from 'react'
import { useQuery } from 'react-query'
import pexels from '../../lib/api'
import { useInfos } from '../../state-management/context'
import ImgMediaCard from '../PhotoCard'
import TextDescription from '../Text'

const AllPix = () => {
  const fetcher = async (_, request) => {
    const {
      data: { photos },
    } = await pexels.get('/v1/search', {
      params: {
        page: 2,
        per_page: 16,
        query: request,
      },
    })

    return photos
  }

  const { search } = useInfos()
  const { data, error, status, isFetching } = useQuery(
    ['allPix', search],
    fetcher
  )

  if (!search.length) {
    return <TextDescription />
  }

  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  if (isFetching) {
    return <TextDescription variant="h6" infos="Background Fetching papi" />
  }
  return (
    <>
      {!data.length && (
        <TextDescription
          infos={`Sorry, no photos for : ${search.toUpperCase()}`}
        />
      )}
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

export default AllPix
