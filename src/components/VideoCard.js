import { CardActions, Grid, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import React from 'react'
import { Link } from 'react-router-dom'
import CTA from './CTA'

const useStyles = makeStyles(theme => ({
  media: {
    height: 360,
    width: 640,
    objectFit: 'contain',
    '&:hover': {
      autoPlay: true,
    },
  },
}))

export default function VideoMediaCard({ id, video_files: videoFiles }) {
  const classes = useStyles()

  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            frameBorder={0}
            allowFullScreen
            component="video"
            controls
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
            <CTA infos="see more" run />
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
