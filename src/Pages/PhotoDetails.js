import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useInfos } from '../state-management/context';

const PhotoDetailsPage = () => {
  const { pix } = useInfos();
  const { id } = useParams();
  const history = useHistory();
  console.log(history);

  const singlePix = pix.find((item) => item.id === Number(id));
  console.log(pix);

  if (!pix.length) return <h2>Loading papi...</h2>;
  const { photographer, src, photographer_url, url } = singlePix;

  return (
    <Grid xs={12} container item justify="center">
      <Card>
        <CardActionArea>
          <Link href={url} target="_blank" rel="noreferrer">
            <CardMedia
              component="img"
              alt=""
              height="600"
              width="100%"
              image={src.large}
              title={photographer}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              This picture is broad to you by: {photographer}, you can check out
              their profile through the link below
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            href={photographer_url}
            target="_blank"
            rel="noreferrer"
            style={{ margin: '0 auto', marginBottom: '1rem' }}
          >
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PhotoDetailsPage;
