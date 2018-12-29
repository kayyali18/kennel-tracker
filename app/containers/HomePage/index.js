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
// import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
// import { Route, NavLink, Link } from 'react-router-dom'

import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import Loading from 'components/Loading'
import Wrapper from './Wrapper'
import { makeSelectRunInfo } from './selectors'
// import messages from './messages'
import reducer from './reducer'
import saga from './saga'
import { runInfoSagaWatcher } from './actions'
import './HomePage.css'

// import DogRun from '../DogRunPage'

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  async componentDidMount() {
    const { dispatchSaga } = this.props
    await dispatchSaga()
    this.state = {
      dog: [],
    }
    // setTimeout(() => {
    //   dispatchSaga()
    // }, 0)
  }

  handleDogs = async dogData => {
    // console.log(dogData)
    await this.setState({ dog: dogData })
    console.log('look at state', this.state.dog)
    await this.props.history.push({
      pathname: '/dog',
      state: { dog: dogData },
    })
  }

  render() {
    const { data } = this.props
    let dogInfo
    try {
      dogInfo = data.data.map(dog => (
        <div
          className="run-info"
          onClick={() => this.handleDogs(dog.attributes)}
          onKeyDown={() => this.handleDogs(dog.attributes)}
          role="button"
          aria-label="click for more info"
          tabIndex="0"
        >
          <p className="pet">
            <strong>Run Number: </strong>
            {dog.attributes.runNumber}
          </p>
          <p className="pet">
            <strong>Pet Name: </strong>
            {dog.attributes.pet.data.attributes.name}
          </p>
          <p className="pet">
            <strong>Species: </strong>
            {dog.attributes.pet.data.attributes.species}
          </p>
          <p className="pet">
            <strong>Breed: </strong>
            {dog.attributes.pet.data.attributes.breed}
          </p>
        </div>
      ))
    } catch {
      console.log('error')
    }

    if (!data) {
      return <Loading />
    }

    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="HomePage with relevant info"
            content="Content explaining current dogs in the Kennel"
          />
        </Helmet>
        <Wrapper>
          <div>{dogInfo}</div>
        </Wrapper>
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
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  dispatchSaga: PropTypes.func,
}
