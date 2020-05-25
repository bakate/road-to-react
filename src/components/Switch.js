import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import React from 'react'
import { useInfos } from '../state-management/context'

const Switch = () => {
  const { darkMode, handleDarkMode } = useInfos()
  return (
    <>
      <IconButton
        aria-label="toggle mode between dark and light"
        onClick={handleDarkMode}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  )
}

export default Switch
