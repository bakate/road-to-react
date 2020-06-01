import { Grid } from '@material-ui/core'
import React from 'react'
import { usePaginatedQuery } from 'react-query'
import pexels from '../../lib/api'
import Pagination from '../Pagination'
import ImgMediaCard from '../PhotoCard'
import TextDescription from '../Text'

const CuratedPix = () => {
  const [page, setPage] = React.useState(1)
  const fetcher = async (_, page) => {
    const { data } = await pexels.get('/v1/curated', {
      params: {
        page: page,
        per_page: 8,
      },
    })

    return data
  }

  const { resolvedData, error, status, isFetching } = usePaginatedQuery(
    ['curatedPix', page],
    fetcher
  )
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  const handleChange = (e, value) => setPage(value)

  return (
    <>
      <TextDescription variant="h6" infos="Last 8 Curated photos" />
      <Pagination
        count={resolvedData.photos.length}
        onChange={handleChange}
        page={page}
      />
      {isFetching && (
        <TextDescription variant="h6" infos="Fetching Your Photos..." />
      )}

      <Grid container spacing={3}>
        {resolvedData.photos.map(item => (
          <ImgMediaCard key={item.id} {...item} />
        ))}
      </Grid>
      <Pagination
        count={resolvedData.photos.length}
        onChange={handleChange}
        page={page}
      />

      {isFetching && (
        <TextDescription variant="h6" infos="Fetching Your Photos..." />
      )}
    </>
  )
}

export default CuratedPix
