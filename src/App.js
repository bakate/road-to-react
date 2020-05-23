import { CssBaseline, Paper } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PhotoDetails from './Pages/PhotoDetails';
import Photos from './Pages/Photos';
import Private from './Pages/Private';
import VideoDetails from './Pages/VideoDetails';
import Videos from './Pages/Videos';
import { useInfos } from './state-management/context';

export default function App() {
  const { darkMode } = useInfos();
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fcfcfc',
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Paper
          component="div"
          style={{ margin: '0 auto 2rem auto', padding: '2rem 2rem' }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/photos">
              <Photos />
            </Route>
            <Route exact path="/user">
              <Login />
            </Route>
            <PrivateRoute exact path="/private">
              <Private />
            </PrivateRoute>
            <Route exact path="/photos/:id">
              <PhotoDetails />
            </Route>
            <Route exact path="/videos">
              <Videos />
            </Route>
            <Route exact path="/videos/:id">
              <VideoDetails />
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
          </Switch>
        </Paper>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}
