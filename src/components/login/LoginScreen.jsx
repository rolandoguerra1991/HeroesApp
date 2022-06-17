import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types';

const LoginScreen = () => {
  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogin = () => {
    const payload = {
      name: 'Rolando Guerra',
      logged: true
    }
    localStorage.setItem('user', JSON.stringify(payload))
    dispatch({
      type: types.login,
      payload,
    });
    navigate('/marvel', {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginScreen