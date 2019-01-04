import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import { makeSelectAuthenticated } from 'containers/App/selectors'
import { loginError } from 'containers/App/actions'
import { runTokenSagaWatcher, submitUserCredentials } from './actions'
import saga from './saga'
import Wrapper from './Wrapper'
import Form from './Form'
import LoginBtn from './LoginBtn'
import './login.css'

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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    //fire of saga watcher action
    const { dispatchSaga, dispatchUser } = this.props
    const { email, password } = this.state
    const user = { email, password }
    dispatchUser(user)
    dispatchSaga()
    this.setState({})
    setTimeout(() => {
      this.userWarning('loginError', 'login-error-active')
    }, 500)
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
    const { authenticated } = this.props
    if (authenticated) return <Redirect to="/" />

    return (
      <Wrapper>
        <Helmet>
          <title>Login</title>
          <meta name="Login Page" content="Login Page for users" />
        </Helmet>
        <h1 className="title-login">Kennel Tracker</h1>
        <Form
          onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}
        >
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            placeholder="E-mail"
            aria-label="Email"
          />

          <input
            className="password-input"
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Password"
            aria-label="Password"
          />

          <LoginBtn ref="loginBtn" size="2em" text="Login" />
          <div className={`login-error-wrapper ${this.state.loginError}`}>
            <p className="login-error-text">
              incorrect email/password combination
            </p>
          </div>
        </Form>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSaga: () => dispatch(runTokenSagaWatcher()),
  dispatchUser: user => dispatch(submitUserCredentials(user)),
  dispatchError: error => dispatch(loginError(error)),
})

const mapStateToProps = createStructuredSelector({
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
  dispatchUser: PropTypes.func,
  authenticated: PropTypes.bool,
}
