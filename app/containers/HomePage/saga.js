/**
 * Gets the suggestions from the kennel_tracker API
 */

import { call, put, takeLatest } from 'redux-saga/effects'
import { apiLoaded, apiLoadingError } from 'containers/App/actions'
import { RUN_CURR_DOGS_SAGA } from 'containers/HomePage/constants'
import { displayCurrDogs } from 'containers/HomePage/actions'

import request from 'utils/request'

/**
 * Api request/response handler
 */
export function* getRunInfo() {
  // Select query from store
  const requestURL = `http://kennel-staging.herokuapp.com/api/v1/reservations/current`
  const optionsObj = {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1NDYzOTY1NDN9.pFGQrXfaqJ3HUQseBO71G9dD4Hroz9GJd_N_cT8uJZw',
    },
  }
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  // requestURL = `${proxyUrl}${requestURL}`

  try {
    // Call our request helper (see 'utils/request')
    const results = yield call(request, requestURL, optionsObj)
    console.log('HELPP', results)
    yield put(displayCurrDogs(results))
    yield put(apiLoaded(results))
  } catch (err) {
    yield put(apiLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* runInfoSaga() {
  // Watches for RUN_CURR_DOGS_SAGA actions and calls getRunInfo when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RUN_CURR_DOGS_SAGA, getRunInfo)
}
