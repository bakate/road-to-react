/* eslint-disable react-hooks/rules-of-hooks */
import { Grid } from '@material-ui/core'
import React from 'react'
import { useQuery } from 'react-query'
import pexels from '../../lib/api'
import { useInfos } from '../../state-management/context'
import TextDescription from '../Text'
import VideoMediaCard from '../VideoCard'

const AllVideos = () => {
  const fetcher = async (_, request) => {
    const {
      data: { videos },
    } = await pexels.get('/videos/search', {
      params: {
        page: 2,
        per_page: 18,
        query: request,
        min_width: 250,
        min_duration: 10,
        max_duration: 30,
      },
    })
    return videos
  }

  const { search } = useInfos()

  const { status, data, error } = useQuery(['allVideos', search], fetcher)

  if (!search.length) {
    return <TextDescription />
  }
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  return (
    <>
      {data.length === 0 && (
        <TextDescription
          infos={`Sorry, no videos for : ${search.toUpperCase()}`}
        />
      )}
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

export default AllVideos

// const response = await axios
//   .post(
//     `${url}/orders`,
//     {
//       name,
//       total,
//       items,
//       stripeTokenId,
//     },
//     {
//       headers: { Authorization: `Bearer ${userToken}` },
//     }
//   )
//   .catch(e => console.log(e));
// return response;
// }
