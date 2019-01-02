/*
* Booking Page
* Here we allow clients to book new customers
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import BookingForm from 'components/BookingForm'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectData,
} from 'containers/App/selectors'
// import Loading from 'components/Loading'
import Wrapper from './Wrapper'
import { loadApi } from '../App/actions'
// import reducer from './reducer'

/* eslint-disable react/prefer-stateless-function */

export default class BookingPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Booking Page</title>
          <meta name="Booking Page" content="Forms for booking reservations" />
        </Helmet>
        <BookingForm />
      </Wrapper>
    )
  }
}
