import React from 'react'

import Button from '../Button/Button';
import Form from '../Form/Form';

import './SignUp.styles.scss'

import { auth,createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const  { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("Passwords don't match, try again");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(err) {
      console.error(err);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="signup">
        <h2 className="signup__title">I do not have an account</h2>
        <span>Sign up using your email and password</span>
        <form className="signup__form" onSubmit={this.handleSubmit} autoComplete="off">
          <Form
            required
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            label="Display Name"
          />
          <Form
            required
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          <Form
            required
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />
          <Form
            required
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Re-Type Password"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    )
  }
}

export default SignUp
