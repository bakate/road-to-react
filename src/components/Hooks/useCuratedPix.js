/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query'
import pexels from '../../lib/api'

const fetcher = async () => {
  const {
    data: { photos },
  } = await pexels.get('/v1/curated', {
    params: {
      page: 2,
      per_page: 16,
    },
  })

  return photos
}

export default function curatedPix() {
  return useQuery('curatedPix', fetcher)
}
