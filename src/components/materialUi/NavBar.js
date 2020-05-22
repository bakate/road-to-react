import { AppBar, Box, debounce, IconButton, Switch, Toolbar, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInfos } from '../../state-management/context';
import Drawer from './Drawer';
import menuItems from './MenuItems';

const useStyles = makeStyles((theme) => ({
  nav: { marginBottom: '2rem' },
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
  // inputRoot: {
  //   color: 'primary',
  // },
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
  const {
    darkMode,
    handleDarkMode,
    user,
    toggleDrawer,
    search,
    setSearch,
  } = useInfos();

  const findSomePix = (query) => {
    setSearch(query);
  };
  const findButSlowly = debounce(findSomePix, 250);

  const classes = useStyles();
  return (
    <Box component="nav" className={classes.nav}>
      <AppBar position="sticky" color="default">
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search a Pix or a Video"
              name="search"
              id="search"
              type="text"
              value={search}
              onChange={(e) => findButSlowly(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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
    </Box>
  );
};

export default NavBar;
