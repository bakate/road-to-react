import { AppBar, Box, debounce, IconButton, Switch, Toolbar, Typography } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useInfos } from '../state-management/context'
import Drawer from './Drawer'
import menuItems from './MenuItems'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(6),
      display: 'block',
    },
  },
  items: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  },
  search: {
    marginLeft: 0,
    width: '100%',
    position: 'relative',
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      marginLeft: theme.spacing(3),
    },
  },
  searchIcon: {
    height: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    pointerEvents: 'none',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
  },
  inputInput: {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const NavBar = () => {
  const {
    user,
    search,
    darkMode,
    setSearch,
    toggleDrawer,
    handleDarkMode,
  } = useInfos()

  const findSomePix = query => {
    setSearch(query)
  }
  const findButSlowly = debounce(findSomePix, 150)

  const classes = useStyles()
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => toggleDrawer('right', true)}
        >
          <Menu />
        </IconButton>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Typography color="inherit" variant="h5" className={classes.title}>
            {user.id ? `Welcome ${user.username}` : null}
          </Typography>
        </NavLink>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            id="search"
            type="text"
            name="search"
            value={search}
            placeholder="Search a Pix or a Video"
            inputProps={{ 'aria-label': 'search' }}
            onChange={e => findButSlowly(e.target.value)}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <Box className={classes.items} component="div">
          {menuItems.map(item => (
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
  )
}

export default NavBar
