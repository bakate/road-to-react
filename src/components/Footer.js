import { AppBar, Box, IconButton, Switch, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInfos } from '../state-management/context';
import Drawer from './materialUi/Drawer';
import menuItems from './materialUi/MenuItems';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
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
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Footer = () => {
  const { darkMode, handleDarkMode, user, toggleDrawer } = useInfos();

  const classes = useStyles();
  return (
    // <Box component="nav" >
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer('right', true)}
        >
          <Menu />
        </IconButton>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Typography color="inherit" variant="h5" className={classes.title}>
            {user.id ? `Welcome ${user.username}` : 'Hello'}
          </Typography>
        </NavLink>

        <Box className={classes.items} component="div">
          {menuItems.map((item) => (
            <div key={item.id}>
              <NavLink exact to={`${item.listPath}`}>
                <IconButton>{item.listIcon}</IconButton>
              </NavLink>
            </div>
          ))}
        </Box>
        <Drawer />
        <Switch checked={darkMode} onChange={handleDarkMode} />
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export default Footer;
