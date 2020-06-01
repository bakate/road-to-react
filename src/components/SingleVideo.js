import { Card, CardActionArea, CardActions, CardMedia, Grid, Link, makeStyles } from '@material-ui/core'
import React from 'react'
import CTA from './CTA'

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

const SingleVideo = ({ videoDetails }) => {
  const classes = useStyles()

  const { url, video_files: videoFiles, user, image: screenshot } =
    videoDetails || []
  return (
    <Grid xs={12} container item justify="center">
      <Card>
        <CardActionArea>
          <CardMedia
            muted
            controls
            frameBorder={0}
            allowFullScreen
            title={user.name}
            component="iframe"
            poster={screenshot}
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

export default SingleVideo
