import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { ArrowBack, DirectionsRun } from '@material-ui/icons'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import getSinglePix from '../components/Hooks/useSinglePix'

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
              height="500"
              width="100%"
              component="img"
              image={src.large}
              title={photographer}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              This picture is broad to you by: {photographer}, you can check out
              their profile through the link below
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => history.replace('/photos')}
          >
            Back To Pix
          </Button>
          <Link target="_blank" rel="noreferrer" href={photographer_url}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              startIcon={<DirectionsRun />}
            >
              See More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PhotoDetailsPage
