/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query'
import pexels from '../../lib/api'

const fetcher = async (_, slug) => {
  const { data } = await pexels.get(`/v1/photos/${slug}`)
  return data
}

const getSinglePix = slug => {
  return useQuery(['singlePix', slug], fetcher)
}

export default getSinglePix
