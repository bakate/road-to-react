/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query'
import pexels from '../../lib/api'

const fetcher = async (_, id) => {
  const { data } = await pexels.get(`/videos/videos/${id}`)
  return data
}

export default function useSingleVideos(slug) {
  return useQuery(['singlePix', slug], fetcher)
}
