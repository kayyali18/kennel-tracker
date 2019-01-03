import React, { Component } from 'react'

import Wrapper from './Wrapper'
import Form from './Form'
import Input from './Input'
import LoginBtn from './LoginBtn'

/* eslint-disable */
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loginError: '',
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  userWarning = async (type, warning) => {
    await this.setState({
      [type]: warning,
    })
    await setTimeout(this.removeWarning, 5000)
  }

  removeWarning = () => {
    this.setState({
      loginError: '',
    })
  }

  render() {
    return (
      <Wrapper>
        <Form>
          <Input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            placeholder="E-mail"
            aria-label="Email"
          />
          <Input
            className="password-input"
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Password"
            aria-label="Password"
          />
          <LoginBtn>Login</LoginBtn>
        </Form>
      </Wrapper>
    )
  }
}
// http://kennel-staging.herokuapp.com/api/v1/login?auth[email]=test@test.com&auth[password]=test_password
