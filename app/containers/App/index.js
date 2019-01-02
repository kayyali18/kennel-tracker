/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectAuthentication } from './selectors'
import Header from 'components/Header'
import HomePage from 'containers/HomePage/Loadable'
import DogInfo from 'components/DogInfo'
import Calendar from 'containers/Calendar'
import Login from 'containers/Login'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  height: 100%;
  background: linear-gradient(#a5a5a5, #f2f2f2);
`

export class App extends React.PureComponent {
  render() {
    if (!this.props.authentication)
      return (
        <AppWrapper>
          <Login />
        </AppWrapper>
      )
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Kennel Tracker"
          defaultTitle="Kennel Tracker"
        >
          <meta
            name="Kennel Tracker"
            content="Application to track Kennel Occupancy"
          />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dog" component={DogInfo} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  authentication: makeSelectAuthentication(),
})

const withConnect = connect(mapStateToProps)

export default compose(withConnect)(App)
