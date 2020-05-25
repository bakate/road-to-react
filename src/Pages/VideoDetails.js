import { Card, CardActionArea, CardActions, CardMedia, Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useParams } from 'react-router-dom'
import CTA from '../components/CTA'
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

  const { status, data, error } = useSingleVideo(Number(id))
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...{error.message}</p>

  const { url, video_files: videoFiles, user, image: screenshot } = data || []

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
          <CTA infos="back" back />

          <Link href={url} target="_blank" rel="noreferrer">
            <CTA infos="see more" run />
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default VideoDetailsPage
