import React from 'react'
import AllPix from '../components/Hooks/useAllPix'
import CuratedPix from '../components/Hooks/useCuratedPix'
import { useInfos } from '../state-management/context'

const Home = () => {
  const { search } = useInfos()
  if (!search.length) return <CuratedPix />

  return <AllPix />
}
export default Home
