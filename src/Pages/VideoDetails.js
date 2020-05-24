import { Button, Card, CardActionArea, CardActions, CardMedia, Grid, Link } from '@material-ui/core'
import { ArrowBack, DirectionsRun } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useSingleVideo from '../components/Hooks/useSingleVideos'

const useStyles = makeStyles(theme => ({
  card: {
    height: 360,
    width: 640,
    objectFit: 'contain',
    [theme.breakpoints.up('sm')]: {
      height: 540,
      width: 960,
      objectFit: 'contain',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const VideoDetailsPage = () => {
  const { id } = useParams()
  const classes = useStyles()
  const history = useHistory()

  const { status, data, error } = useSingleVideo(Number(id))
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  const { url, video_files: videoFiles, user, image: screenshot } = data || []
  console.log(videoFiles)

  return (
    <Grid xs={12} container item justify="center">
      <Card>
        <CardActionArea>
          <CardMedia
            muted
            frameBorder={0}
            poster={screenshot}
            allowFullScreen
            title={user.name}
            component="iframe"
            src={videoFiles[0].link}
            className={classes.card}
            style={{ backgroundImage: `url(/${screenshot})` }}
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
