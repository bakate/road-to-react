import { Button, CardActions, Grid, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { DirectionsRun } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  media: {
    width: '100%',
    height: 350,
    objectFit: 'contain',
  },
}))

export default function VideoMediaCard({ id, video_files: videoFiles }) {
  const classes = useStyles()

  const allVideos = videoFiles && videoFiles.map(v => v)
  const [firstVideo] = allVideos || []

  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card>
        <CardActionArea>
          <CardMedia
            component="iframe"
            className={classes.media}
            src={firstVideo && firstVideo.link}
            frameBorder={0}
            allowFullScreen
            muted
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        </CardActionArea>
        <CardActions>
          <Link
            to={`videos/${id}`}
            style={{ margin: '0 auto', marginBottom: '1rem' }}
          >
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
