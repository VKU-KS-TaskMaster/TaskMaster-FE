import { useEffect, useState } from 'react'
import { auth } from '../config/firebase.config'

export const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          localStorage.setItem('token', token)
          setUser(user)
        })
      } else {
        localStorage.removeItem('token')
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return { user }
}
