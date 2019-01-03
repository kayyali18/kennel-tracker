import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
// import { createStructuredSelector } from 'reselect'

import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import { makeSelectAuthenticated } from 'containers/App/selectors'
import { runTokenSagaWatcher } from './actions'
import saga from './saga'
import Wrapper from './Wrapper'
import Form from './Form'
import Input from './Input'
import LoginBtn from './LoginBtn'

/* eslint-disable */
export class Login extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loginError: '',
    }
  }

  async componentDidMount() {
    const { dispatchSaga } = this.props
    await dispatchSaga()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = () => {
    //fire of saga watcher action
    console.log('hello')
    //get token

    //fire off action to update store

    //all good
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
        <Helmet>
          <title>Login</title>
          <meta name="Login Page" content="Login Page for users" />
        </Helmet>
        <Form
          onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}
        >
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
          <LoginBtn ref="loginBtn" size="2em" text="Login" />
        </Form>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSaga: () => dispatch(runTokenSagaWatcher()),
})

const mapStateToProps = dispatch => ({
  authenticated: makeSelectAuthenticated(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withSaga = injectSaga({ key: 'login', saga, mode: DAEMON })

export default compose(
  withSaga,
  withConnect,
)(Login)

Login.propTypes = {
  dispatchSaga: PropTypes.func,
  authenticated: PropTypes.bool,
}
// http://kennel-staging.herokuapp.com/api/v1/login?auth[email]=test@test.com&auth[password]=test_password
