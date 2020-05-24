import { Typography } from '@material-ui/core'
import React from 'react'
import QueryAllPix from '../components/Hooks/QueryPix'
import { useInfos } from '../state-management/context'

const PhotosPage = () => {
  const { search } = useInfos()

  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        color="initial"
        style={{
          textAlign: 'center',
          marginBottom: '1rem',
          textTransform: 'capitalize',
        }}
      >
        {search
          ? `Here are your pictures for : ${search.toUpperCase()}.
        `
          : null}
      </Typography>
      <QueryAllPix search={search} />
    </div>
  )
}

export default PhotosPage
