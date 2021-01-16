import React from 'react'

import './SignIn.styles.scss'
import Form from '../Form/Form';
import Button from '../Button/Button';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

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

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn