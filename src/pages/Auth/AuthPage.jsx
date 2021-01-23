import React from 'react'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './AuthPage.styles.scss'

const AuthPage = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default AuthPage
