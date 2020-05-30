import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import pexels from '../../lib/api'
import SingleVideo from '../SingleVideo'
import TextDescription from '../Text'

const SingleVid = () => {
  const fetcher = async (_, id) => {
    const { data } = await pexels.get(`/videos/videos/${id}`)
    return data
  }

  const { id } = useParams()
  const { status, data, error, isFetching } = useQuery(
    ['singlePix', Number(id)],
    fetcher
  )
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  if (isFetching) {
    return <TextDescription variant="h6" infos="Background Fetching papi" />
  }
  return <SingleVideo videoDetails={data} />
}

export default SingleVid
