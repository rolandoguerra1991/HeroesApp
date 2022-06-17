import React, { Fragment, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import authReducer from './auth/authReducer';
import AppRouter from './routers/AppRouter'

const App = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
  }
  const [user, dispatch] = useReducer(authReducer, {}, init);
  return (
    <Fragment>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter/>
      </AuthContext.Provider>
    </Fragment>
  )
}

export default App