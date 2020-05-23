import { AccountCircle, Home, PhotoCamera, Videocam } from '@material-ui/icons'
import React from 'react'

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    id: '4a30480f-e8d0-5ea0-aabf-1dda10d9d89e',
    listPath: '/',
  },
  {
    listIcon: <PhotoCamera />,
    listText: 'Photos',
    id: 'b2d87f14-6ad8-5fa7-b9d9-76c08e6da821',
    listPath: '/photos',
  },
  {
    listIcon: <Videocam />,
    listText: 'Videos',
    id: '46c25770-2759-5d96-83ef-39d516a4b05f',
    listPath: '/videos',
  },
  {
    listIcon: <AccountCircle />,
    listText: 'Account',
    id: '6ac86dae-4f3a-5684-83a4-ac2e3f866bab',
    listPath: '/private',
  },
]

export default menuItems
