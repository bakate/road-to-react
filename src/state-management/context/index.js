import React, { createContext, useContext, useState } from 'react'

const Infos = createContext()

const nobody = {
  id: null,
  email: null,
  username: null,
  password: null,
  showPassword: false,
}
const getUserFromLocalStorage = () => {
  const somebody = localStorage.getItem('user')
  return somebody ? JSON.parse(somebody) : nobody
}
const MamaProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage())

  const [darkMode, setDarkMode] = useState(false)
  const handleDarkMode = () => {
    return setDarkMode(!darkMode)
  }
  const [drawerify, setDrawer] = useState({ right: false })
  const toggleDrawer = (slide, open) => {
    setDrawer({ ...drawerify, [slide]: open })
  }
  const [search, setSearch] = useState('')

  const userLogin = person => {
    setUser(person)
    localStorage.setItem('user', JSON.stringify(person))
  }
  const userLogout = () => {
    setUser(nobody)
    localStorage.removeItem('user')
  }

  return (
    <Infos.Provider
      value={{
        darkMode,
        handleDarkMode,
        user,
        userLogin,
        userLogout,
        drawerify,
        toggleDrawer,
        search,
        setSearch,
      }}
    >
      {children}
    </Infos.Provider>
  )
}

const useInfos = () => useContext(Infos)

export { MamaProvider, useInfos }

