/**
 * Gets the suggestions from the kennel_tracker API
 */

import { call, put, takeLatest, select } from 'redux-saga/effects'

import { postError, postSuccess } from 'containers/BookingPage/actions'
import { RUN_POST_SAGA } from 'containers/BookingPage/constants'
import {
  makeSelectOwner,
  makeSelectDog,
  makeSelectVet,
  makeSelectPath,
} from 'containers/BookingPage/selectors'
import request from 'utils/request'

/**
 * Api request/response handler
 */
export function* postInfo() {
  const path = yield select(makeSelectPath())
  const owner = yield select(makeSelectOwner())
  const dog = yield select(makeSelectDog())
  const vet = yield select(makeSelectVet())

  const body = yield call(getBody, path, owner, dog, vet)
  const token = JSON.parse(localStorage.getItem('token'))

  // Post info
  const requestURL = `http://kennel-staging.herokuapp.com/api/v1/${path}`
  const optionsObj = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
  }
  // /new reservation
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, optionsObj)
    yield call(postSuccess(response))
  } catch (err) {
    yield put(postError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* runPostSaga() {
  // Watches for POST_SAGA actions and calls postInfo when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RUN_POST_SAGA, postInfo)
}

/**
 *        UTILITY FUNCTIONS
 *
 * Functions that are verbose but do important
 * stuff are kept here. Feel free to contribute!
 */

function getBody(path, owner, dog, vet) {
  if (path === 'owners') return JSON.stringify(owner)
  if (path === 'pets') return JSON.stringify(dog)
  return JSON.stringify(vet)
}
