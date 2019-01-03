/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Header from 'components/Header'
import HomePage from 'containers/HomePage/Loadable'
import BookingPage from 'containers/BookingPage/Loadable'
import DogInfo from 'components/DogInfo'
import Calendar from 'containers/Calendar'
import Login from 'containers/Login'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import './App.css'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(#ff700b, #ff275f);
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Kennel Tracker" defaultTitle="Kennel Tracker">
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
        <Route exact path="/booking" component={BookingPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  )
}
