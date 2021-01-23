import React from 'react'

import './SignIn.styles.scss'
import Form from '../Form/Form';
import Button from '../Button/Button';

import { auth, signinwithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''})
    } catch (err) {
      console.log(err);
    }

    this.setState({ email: '', password: ''})
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="signin">
        <h2>Have an Account?</h2>
        <span className="title">Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Form
            required
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            />
          <Form
            required
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            />
          <div className="signin__button_group">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signinwithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn