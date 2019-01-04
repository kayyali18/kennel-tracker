/**
 * The booking state selectors
 */

import { createSelector } from 'reselect'

const selectBooking = state => state.get('booking')

const selectRouter = state => state.get('router')

const makeSelectPath = () =>
  createSelector(selectBooking, bookingState => bookingState.get('path'))

const makeSelectSuccess = () =>
  createSelector(selectBooking, bookingState => bookingState.get('success'))

const makeSelectError = () =>
  createSelector(selectBooking, bookingState => bookingState.get('error'))

const makeSelectOwner = () =>
  createSelector(selectBooking, bookingState => bookingState.get('owner'))

const makeSelectDog = () =>
  createSelector(selectBooking, bookingState => bookingState.get('dog'))

const makeSelectVet = () =>
  createSelector(selectBooking, bookingState => bookingState.get('vet'))

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  )

export {
  selectBooking,
  selectRouter,
  makeSelectPath,
  makeSelectError,
  makeSelectSuccess,
  makeSelectLocation,
  makeSelectVet,
  makeSelectDog,
  makeSelectOwner,
}
