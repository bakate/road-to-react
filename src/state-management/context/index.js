import React, { createContext, useContext, useState } from 'react';

const Infos = createContext();

const nobody = {
  username: null,
  email: null,
  password: null,
  showPassword: false,
  id: null,
};
const getuserFromLocalStorage = () => {
  const somebody = localStorage.getItem('user');
  return somebody ? JSON.parse(somebody) : nobody;
};
const MamaProvider = ({ children }) => {
  const [user, setUser] = useState(getuserFromLocalStorage());

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    return setDarkMode(!darkMode);
  };
  const [drawerify, setDrawer] = useState({ right: false });
  const toggleDrawer = (slide, open) => {
    setDrawer({ ...drawerify, [slide]: open });
  };
  const [pix, setPix] = useState([]);
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('Paris');

  const userLogin = (person) => {
    setUser(person);
    localStorage.setItem('user', JSON.stringify(person));
  };
  const userLogout = () => {
    setUser(nobody);
    localStorage.removeItem('user');
  };

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
        pix,
        setPix,
        videos,
        setVideos,
      }}
    >
      {children}
    </Infos.Provider>
  );
};

const useInfos = () => useContext(Infos);

export { MamaProvider, useInfos };

