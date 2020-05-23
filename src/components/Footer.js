import { AppBar, Box, IconButton, Switch, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useInfos } from '../state-management/context'
import Drawer from './Drawer'
import menuItems from './MenuItems'

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
}))

const Footer = () => {
  const { darkMode, handleDarkMode, toggleDrawer } = useInfos()

  const classes = useStyles()
  return (
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

export default Footer
