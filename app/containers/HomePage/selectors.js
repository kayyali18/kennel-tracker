/**
 * HomePage selectors
 */
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectHome = state => state.get('runInfo', initialState)

const makeSelectRunInfo = () =>
  createSelector(selectHome, homeState => homeState.get('runInfo'))

export { selectHome, makeSelectRunInfo }
