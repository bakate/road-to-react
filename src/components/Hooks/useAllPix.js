/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query'
import pexels from '../../lib/api'


const fetcher = async (_, request) => {
  const { data } = await pexels.get('/v1/search', {
    params: {
      page: 2,
      per_page: 16,
      query: request,
    },
  })

  return data.photos
}

export default function useAllPix(search) {
  return useQuery(['allPix', search], fetcher)
}
