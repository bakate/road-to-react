import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import pexels from '../../lib/api'
import SinglePhoto from '../SinglePhoto'
import TextDescription from '../Text'

const SinglePix = () => {
  const fetcher = async (_, slug) => {
    const { data } = await pexels.get(`/v1/photos/${slug}`)
    return data
  }

  const { id } = useParams()
  const { error, status, data, isFetching } = useQuery(
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

  return <SinglePhoto photDetails={data} />
}

export default SinglePix
