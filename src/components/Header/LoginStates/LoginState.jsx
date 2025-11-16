import React, { useState } from 'react'
import WhenLogin from './WhenLogin'
import WhenLogout from './WhenLogout'

function LoginState() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    loggedIn ? <WhenLogin /> : <WhenLogout />
  )
}

export default LoginState