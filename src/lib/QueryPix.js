import { Grid } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import ImgMediaCard from '../components/Card';
import { useInfos } from '../state-management/context';
import pexels from './api';

const Query = () => {
  const { search, setPix } = useInfos();

  const fetcher = async (request) => {
    const res = await pexels.get('/v1/search', {
      params: {
        query: request,
        per_page: 16,
        page: 1,
      },
    });
    const response = await res.data.photos;
    setPix(response);
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
    return <h2 style={{ textAlign: 'center' }}>Sorry no pix for {search}</h2>;
  }
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <ImgMediaCard key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default Query;
