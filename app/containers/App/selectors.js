/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = state => state.get('global')

const selectRouter = state => state.get('router')

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'))

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'))

const makeSelectSearchQuery = () =>
  createSelector(selectGlobal, globalState => globalState.get('searchQuery'))

const makeSelectData = () =>
  createSelector(selectGlobal, globalState => globalState.get('dogData'))

const makeSelectAuthentication = () =>
  createSelector(selectGlobal, globalState => globalState.get('authentication'))

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  )

export {
  selectGlobal,
  selectRouter,
  makeSelectLoading,
  makeSelectError,
  makeSelectSearchQuery,
  makeSelectLocation,
  makeSelectData,
  makeSelectAuthentication,
}
