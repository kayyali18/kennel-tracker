/**
 * LoginPage selectors
 */
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectLogin = state => state.get('login', initialState)

const makeSelectEmail = () =>
  createSelector(selectLogin, loginState => loginState.getIn(['user', 'email']))

const makeSelectPassword = () =>
  createSelector(selectLogin, loginState =>
    loginState.getIn(['user', 'password']),
  )

export { selectLogin, makeSelectEmail, makeSelectPassword }

// const makeSelectData = () =>
//   createSelector(selectGlobal, globalState =>
//     globalState.getIn(['tasteDive', 'apiData']),
//   )
