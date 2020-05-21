import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import pexels from '../../lib/api';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3)

  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

// const useStyles = makeStyles({
  //   // style rule
  //   foo: props => ({
    //     backgroundColor: props.backgroundColor,
    //   }),
    //   bar: {
      //     // CSS property
      //     color: props => props.color,
      //   },
      // });

      // function MyComponent() {
        //    Simulated props for the purpose of the example
        //   const props = { backgroundColor: 'black', color: 'white' };
        //    Pass the props as the first argument of useStyles()
        //   const classes = useStyles(props);

        //   return <div className={`${classes.foo} ${classes.bar}`} />
        // }

        export default function CenteredGrid() {
          const classes = useStyles();
          const term = "paris"
          useEffect(() => {

        const getData = async () =>   { const response = await pexels.get(`/v1/search`, {
                params: {
                  query:term,
                  per_page: 15,
                  page: 1
                }
              })
              const res = await response.data
              console.log(res);
}
getData()

          }, [])

          return (
            <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>


      </Grid>
    </div>
  );
}
