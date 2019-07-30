import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { firebase } from '../db/firebase'

const LoginAnonButton = () => {
  const [ loggedIn, setLoggedIn ] = useState(false)

  const handleLogin = () => {

    if (firebase.auth().currentUser) {

      firebase.auth().signOut()
      setLoggedIn(false)

    } else {

      firebase.auth().signInAnonymously()
      setLoggedIn(true)
    }
  }

  return (
    <Button onClick={ handleLogin }>
      {
        loggedIn ? 'Logout' : 'Login Anonymously'
      }
    </Button>
  )
}

export default LoginAnonButton
