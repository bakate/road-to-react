import { Grid } from '@material-ui/core'
import React from 'react'
import { usePaginatedQuery } from 'react-query'
import pexels from '../../lib/api'
import ImgMediaCard from '../PhotoCard'
import TextDescription from '../Text'

const CuratedPix = () => {
  const [page, setPage] = React.useState(1)
  console.log({ page })
  const fetcher = async (_, page) => {
    const { data } = await pexels.get('/v1/curated', {
      params: {
        page: page,
        per_page: 2,
      },
    })

    return data
  }

  const {
    resolvedData,
    latestData,
    error,
    status,
    isFetching,
  } = usePaginatedQuery(['curatedPix', page], fetcher)
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  console.log(resolvedData)

  return (
    <>
      <TextDescription
        variant="h6"
        infos="Last 8 Curated photos.
        Make your query and go visit Photos and Videos Pages"
      />

      <Grid container spacing={3}>
        {resolvedData.photos.map(item => (
          <ImgMediaCard key={item.id} {...item} />
        ))}
      </Grid>
      <span>Current Page: {page + 1}</span>
      <button
        type="button"
        onClick={() => {
          setPage(old => Math.max(old - 1, 0))
        }}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() =>
          // Here, we use `latestData` so the Next Page
          // button isn't relying on potentially old data
          setPage(old => (!latestData ? old : old + 1))
        }
        // disabled={!latestData || !latestData.hasMore}
      >
        Next Page
      </button>
      {isFetching && (
        <TextDescription variant="h6" infos="Fetching Your Photos..." />
      )}
    </>
  )
}

export default CuratedPix
