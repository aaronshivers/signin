import React from 'react'
import { Container, Button } from 'react-bootstrap'
import LoginForm from './LoginForm'
import LoginAnonButton from './LoginAnonButton'

const Login = () => (
  <Container>
    <LoginForm />
    <LoginAnonButton />
  </Container>
)

export default Login
