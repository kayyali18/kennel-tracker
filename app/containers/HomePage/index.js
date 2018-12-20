/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import BookingForm from 'components/BookingForm'
import Loading from 'components/Loading'
import { makeSelectRunInfo } from './selectors'
import messages from './messages'
import reducer from './reducer'
import saga from './saga'
import { runInfoSagaWatcher } from './actions'

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    const { dispatchSaga } = this.props
    setTimeout(() => {
      dispatchSaga()
    }, 2000)
  }

  render() {
    const { data } = this.props
    console.log(data)
    if (!data) return <Loading />
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="HomePage with relevant info"
            content="Relevant content from across the web"
          />
        </Helmet>
        <h1>
          <BookingForm />
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchSaga: () => dispatch(runInfoSagaWatcher()),
})

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  data: makeSelectRunInfo(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'home', reducer })
const withSaga = injectSaga({ key: 'home', saga, mode: DAEMON })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage)

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  dispatchSaga: PropTypes.func,
}
