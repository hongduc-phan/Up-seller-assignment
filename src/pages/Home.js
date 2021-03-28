import React, { useCallback, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { authContext } from '../context'

const Home = () => {

  const { logged, clearAuth } = useContext(authContext)

  const onClickLogout = useCallback(() => {
    clearAuth()
  }, [logged, clearAuth])

  return (
    <div>
      {logged ? (
        <>
          <h3>Welcome to Upseller page www.upseller.fi</h3>
          <Button onClick={onClickLogout}>Sign out</Button>
        </>
      ) : (
        <Redirect to='/login'/>
      )}
      
    </div>
  )
}

export default Home