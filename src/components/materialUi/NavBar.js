import { AppBar, Box, IconButton, Switch, Toolbar, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AccountCircle, Home, Menu, PhotoCamera, Videocam } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInfos } from '../../state-management/context';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginRight: theme.spacing(6),
    },
  },
  items: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-evenly',
      display: 'flex',
      flexGrow: 1,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const NavBar = () => {
  const { darkMode, handleDarkMode, user } = useInfos();

  const classes = useStyles();
  return (
    <Box component="nav">
      <AppBar position="sticky" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography color="inherit" variant="h5" className={classes.title}>
            {user.id ? `Welcome ${user.username}` : 'Hello'}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search a Pix or a Video"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Box className={classes.items} component="div">
            <NavLink exact to="/">
              <IconButton>
                <Home />
              </IconButton>
            </NavLink>
            <NavLink to="/photos">
              <IconButton>
                <PhotoCamera />
              </IconButton>
            </NavLink>
            <NavLink to="/videos">
              <IconButton>
                <Videocam />
              </IconButton>
            </NavLink>
            <NavLink to="/private">
              <IconButton>
                <AccountCircle />
              </IconButton>
            </NavLink>
          </Box>
          <Switch checked={darkMode} onChange={handleDarkMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
