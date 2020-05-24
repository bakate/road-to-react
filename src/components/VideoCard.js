import { Button, CardActions, Grid, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { DirectionsRun } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    autoPlay: 'false',
  },
  media: {
    height: 360,
    width: 640,
    objectFit: 'contain',
    autoPlay: 'false',
  },
}))

export default function VideoMediaCard({
  id,
  video_files: videoFiles,
  image: screenshot,
}) {
  const classes = useStyles()

  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            poster={screenshot}
            frameBorder={0}
            allowFullScreen
            component="iframe"
            autoPlay={false}
            className={classes.media}
            src={videoFiles[0].link}
            allow="accelerometer;encrypted-media; gyroscope; picture-in-picture"
          />
        </CardActionArea>
        <CardActions>
          <Link
            to={`videos/${id}`}
            style={{ margin: '0 auto', marginBottom: '1rem' }}
          >
            <Button
              size="small"
              color="primary"
              variant="contained"
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
