/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query'
import pexels from '../../lib/api'

const fetcher = async () => {
  const {
    data: { photos },
  } = await pexels.get('/v1/curated', {
    params: {
      page: 1,
      per_page: 8,
    },
  })

  return photos
}

export default function curatedPix() {
  return useQuery('curatedPix', fetcher)
}
