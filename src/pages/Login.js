import React, { useState, useContext, useCallback } from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { authContext } from '../context'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginFail, setLoginFail] = useState(false)
  const { logged, saveAuth } = useContext(authContext)

  const submitLogin = useCallback(() => {
    if (email === 'admin' && password === 'admin') {
      saveAuth({
        email,
        password
      })
    } else {
      setLoginFail(true)
    }
  }, [saveAuth, setLoginFail, email, password])

  const onClickLogin = (event) => {
    event.preventDefault()
    submitLogin()
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onKeyPressLogin = (event) => {
    if (event.charCode === 13) {
      // support press enter for submitting
      event.preventDefault()
      submitLogin()
    }
  }

  return (
    <div style={{ maxWidth: 500 }}>
      {!logged ? (
        <>
          <h3>Login</h3>
          <Form onKeyPress={onKeyPressLogin}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' value={email} onChange={onChangeEmail} />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' value={password} onChange={onChangePassword} />
            </Form.Group>

            {(email || password) && loginFail && (
              <Form.Text style={{ color: 'red' }}>
                Email or Password is not correct!
              </Form.Text>
            )}

            <Button variant='primary' type='submit' onClick={onClickLogin}>
              Submit
            </Button>
          </Form>
        </>
      ) : (
        <Redirect to='/'/>
      )}

    </div>
  )
}

export default Login