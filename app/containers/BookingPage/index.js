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
import Header from 'components/Header'
import Wrapper from './Wrapper'
import { loadApi } from '../App/actions'
// import reducer from './reducer'

/* eslint-disable react/prefer-stateless-function */

export default class BookingPage extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      stage: 1,
    }
  }

  saveForm = inputs => {
    let { stage } = this.state
    stage += 1
    this.setState({
      formData: { ...inputs, stage },
    })
  }

  render() {
    const { stage } = this.state
    return (
      <Wrapper>
        <Helmet>
          <title>Booking Page</title>
          <meta name="Booking Page" content="Forms for booking reservations " />
        </Helmet>
        <Header />
        <BookingForm stage={stage} handleSubmit={this.saveForm} />
      </Wrapper>
    )
  }
}
