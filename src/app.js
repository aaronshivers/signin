import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import App from './components/App'
import './styles/styles.scss'
import Login from './components/Login'

firebase.auth().onAuthStateChanged(user => {

  render(
    <>
      { user ? <App /> : <Login /> }
    </>
    , document.getElementById('app'))
})
