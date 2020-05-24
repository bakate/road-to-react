import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ImgMediaCard({ id, src, photographer }) {
  return (
    <Grid xs={12} sm={6} item>
      <Card>
        <CardActionArea>
          <Link to={`photos/${id}`}>
            <CardMedia
              alt={photographer}
              height="350"
              component="img"
              title={photographer}
              image={src && src.large}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              This picture is broad to you by: {photographer}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            to={`photos/${id}`}
            style={{ margin: '0 auto', marginBottom: '1rem' }}
          >
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
