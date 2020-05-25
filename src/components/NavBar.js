import { AppBar, Box, IconButton, Switch, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useInfos } from '../state-management/context'
import Drawer from './Drawer'
import InputSearch from './InputSearch'
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
}))

const NavBar = () => {
  const { user, darkMode, toggleDrawer, handleDarkMode } = useInfos()

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
        <InputSearch />
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
