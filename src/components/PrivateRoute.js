import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useInfos } from '../state-management/context'

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useInfos()

  return (
    <Route
      {...rest}
      render={() => (user.id ? children : <Redirect to="/user" />)}
    />
  )
}

export default PrivateRoute
