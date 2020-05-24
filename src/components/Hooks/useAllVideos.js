/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query'
import pexels from '../../lib/api'

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

export default function allVideos(searchVideos) {
  return useQuery(['allVideos', searchVideos], fetcher)
}
