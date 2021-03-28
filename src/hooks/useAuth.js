import { useState, useEffect } from 'react'
import { KEY_AUTHENTICATION } from '../constants'
const useAuth = () => {
  const [logged, setLogged] = useState(null)

  useEffect(() => {
    const auth = localStorage.getItem(KEY_AUTHENTICATION)
    if (auth) setLogged(auth)
  }, [])

  const saveAuth = (auth) => {
    localStorage.setItem(KEY_AUTHENTICATION, auth)
    setLogged(auth)
  }

  const clearAuth = () => {
    localStorage.removeItem(KEY_AUTHENTICATION)
    setLogged(null)
  }
  
  return {
    logged,
    saveAuth,
    clearAuth
  }
}

export default useAuth