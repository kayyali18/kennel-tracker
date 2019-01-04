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
  background-image: url('https://i.imgur.com/M7Oqi6Z.jpg');
  background-color: #0e0b12;
  background-size: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
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
