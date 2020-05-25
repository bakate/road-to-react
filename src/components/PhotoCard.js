import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import React from 'react'
import { Link } from 'react-router-dom'
import CTA from './CTA'
import TextDescription from './Text'

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
            <TextDescription infos={`Broad to you by : ${photographer}`} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            to={`photos/${id}`}
            style={{ margin: '0 auto', marginBottom: '1rem' }}
          >
            <CTA infos="see more" run />
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
