import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link } from '@material-ui/core'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import CTA from '../components/CTA'
import getSinglePix from '../components/Hooks/useSinglePix'
import TextDescription from '../components/Text'

const PhotoDetailsPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const { error, status, data } = getSinglePix(Number(id))
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>
  const { url, src, photographer, photographer_url } = data || []

  return (
    <Grid xs={12} container item justify="center">
      <Card>
        <CardActionArea>
          <Link href={url} target="_blank" rel="noreferrer">
            <CardMedia
              height="400"
              width="100%"
              component="img"
              image={src.large}
              title={photographer}
              style={{ objectFit: 'cover' }}
            />
          </Link>
          <CardContent>
            <TextDescription
              infos={`This photo is broad to you by: ${photographer}.You can check
              out their profile through the link below`}
            />
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CTA infos="back to pix" back />
          <Link target="_blank" rel="noreferrer" href={photographer_url}>
            <CTA infos="see more" run />
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PhotoDetailsPage
