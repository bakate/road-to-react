import { Button, Card, CardActionArea, CardActions, CardMedia, Grid, Link } from '@material-ui/core'
import { ArrowBack, DirectionsRun } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useSingleVideo from '../components/Hooks/QuerySingleVideo'

const useStyles = makeStyles({
  card: {
    width: '100vw',
  },
  root: {
    maxWidth: '100%',
    marginBottom: '2rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const VideoDetailsPage = () => {
  const { id } = useParams()
  const classes = useStyles()
  const history = useHistory()

  const { status, data, error } = useSingleVideo(Number(id))
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  const { url, video_files: videoFiles, user } = data || []

  return (
    <Grid xs={12} container item justify="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="iframe"
            src={videoFiles[0].link}
            frameBorder={0}
            height="600"
            title={user.name}
            className={classes.card}
            allowFullScreen
            muted
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        </CardActionArea>

        <CardActions className={classes.buttons}>
          <Button
            size="small"
            startIcon={<ArrowBack />}
            variant="contained"
            color="primary"
            onClick={() => history.replace('/videos')}
          >
            Back
          </Button>
          <Link href={url} target="_blank" rel="noreferrer">
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<DirectionsRun />}
            >
              More Info
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default VideoDetailsPage
