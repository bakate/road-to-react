import { Box, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import React from 'react'
import { Link } from 'react-router-dom'
import { useInfos } from '../state-management/context'
import MenuItems from './MenuItems'

const useStyles = makeStyles(theme => ({
  menuSlider: {
    width: 250,
    height: '100%',
  },
}))
const Drawerify = () => {
  const classes = useStyles()
  const { drawerify, toggleDrawer } = useInfos()

  const DrawerItems = position => (
    <Box
      component="div"
      className={classes.menuSlider}
      onClick={() => toggleDrawer(position, false)}
    >
      <List>
        {MenuItems.map(item => (
          <ListItem button key={item.id}>
            <ListItemIcon color="secondary">{item.listIcon}</ListItemIcon>
            <Link to={`${item.listPath}`} style={{ textDecoration: 'none' }}>
              <ListItemText style={{ color: 'tomato' }}>
                {item.listText}
              </ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <SwipeableDrawer
      anchor="right"
      open={drawerify.right}
      onClose={() => toggleDrawer('right', false)}
      onOpen={() => toggleDrawer('right', true)}
    >
      {DrawerItems('right')}
    </SwipeableDrawer>
  )
}

export default Drawerify
