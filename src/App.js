import React from 'react'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import useAuth from './hooks/useAuth'
import { authContext } from './context'

import LoginPage from './pages/Login'
import HomePage from './pages/Home'

export default () => {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="*">
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

const ProvideAuth = ({ children }) => {
  const auth = useAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}