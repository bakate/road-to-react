import { Grid } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import { useInfos } from '../state-management/context';
import pexels from './api';

const QueryVideos = () => {
  const { search, setVideos } = useInfos();

  const fetcher = async (request) => {
    const res = await pexels.get('/videos/search', {
      params: {
        query: request,
        per_page: 18,
        page: 1,
        min_duration: 10,
        max_duration: 30,
        min_width: 250,
      },
    });
    const response = await res.data.videos;
    setVideos(response);
    return response;
  };

  const { status, data } = useQuery(search, fetcher);
  if (status === 'loading')
    return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (status === 'error')
    return <p style={{ textAlign: 'center' }}>Error Papi...</p>;
  if (!data) {
    return <h2 style={{ textAlign: 'center' }}>Search Something Papi</h2>;
  }
  if (data.length === 0) {
    return (
      <h2 style={{ textAlign: 'center' }}>Sorry no videos for {search}</h2>
    );
  }
  return (
    <Grid container spacing={3}>
      {/* {data.map((item) => (
        <ImgMediaCard key={item.id} {...item} />
      ))} */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Grid>
  );
};

export default QueryVideos;
