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
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import Header from 'components/Header'
import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectAuthenticated,
} from 'containers/App/selectors'
import reducer from './reducer'
import saga from './saga'
import { runInfoSagaWatcher } from './actions'
import { makeSelectRunInfo } from './selectors'
import './HomePage.css'
import H1 from './H1'
import Div from './Div'
import PTag from './PTag'

/* eslint-disable */
export class HomePage extends React.PureComponent {
  async componentDidMount() {
    const { dispatchSaga } = this.props
    await dispatchSaga()
    this.state = {
      dog: [],
    }
    setTimeout(() => {
      dispatchSaga()
    }, 0)
  }

  handleDogs = async dogData => {
    await this.setState({ dog: dogData })
    await this.props.history.push({
      pathname: '/dog',
      state: { dog: dogData },
    })
  }

  render() {
    const { data, authenticated } = this.props
    if (!authenticated) return <Redirect to="/login" />
    let dogInfo
    try {
      dogInfo = data.data.map(dog => (
        <Div
          key={dog.attributes.runNumber}
          className="run-info"
          onClick={() => this.handleDogs(dog.attributes)}
          onKeyDown={() => this.handleDogs(dog.attributes)}
          role="button"
          aria-label="click for more info"
          tabIndex="0"
        >
          <PTag>
            <strong>Run Number: </strong>
            {dog.attributes.runNumber}
          </PTag>
          <PTag>
            <strong>Pet Name: </strong>
            {dog.attributes.pet.data.attributes.name}
          </PTag>
          <PTag>
            <strong>Species: </strong>
            {dog.attributes.pet.data.attributes.species}
          </PTag>
          <PTag>
            <strong>Breed: </strong>
            {dog.attributes.pet.data.attributes.breed}
          </PTag>
        </Div>
      ))
    } catch {
      console.log('error')
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
        <Header />
        <section className="home">
          <H1>Kennel Tracker</H1>
          <div className="dogs">{dogInfo}</div>
        </section>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchSaga: () => dispatch(runInfoSagaWatcher()),
})

export const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  data: makeSelectRunInfo(),
  authenticated: makeSelectAuthenticated(),
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
  authenticated: PropTypes.bool,
}
