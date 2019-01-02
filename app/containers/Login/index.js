import React, { Component } from 'react'

import Wrapper from './Wrapper'
import Form from './Form'
import Input from './Input'

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
            placeholder="email"
            aria-label="email-input"
          />
          <Input
            className="password-input"
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
            placeholder="password"
            aria-label="password-input"
          />
          <Input
            className="login-submit"
            type="submit"
            value="login"
            aria-label="login-submit-button"
          />
        </Form>
      </Wrapper>
    )
  }
}
