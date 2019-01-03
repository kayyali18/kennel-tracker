/**
 * Gets the token from the kennel_tracker API
 */

import { call, put, takeLatest } from 'redux-saga/effects'
import { loginError } from 'containers/App/actions'
import { RUN_TOKEN_SAGA } from 'containers/Login/constants'

import request from 'utils/request'

/**
 * Api request/response handler
 */

export function* getToken() {
  // Post user credentials
  const requestURL = `http://kennel-staging.herokuapp.com/api/v1/login?auth[email]=test@test.com&auth[password]=test_password`
  const optionsObj = {
    method: 'POST',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1NDcxMDM4MTF9.YDq4GlviuBIewD0MWcx8BDcEiSPtNJy8VS0HvQNIjk0',
    },
  }

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, optionsObj)
    console.log(response)
    // fire an action that saves in LS
    // create an action that pulls from LS
  } catch (err) {
    yield put(loginError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* runTokenSaga() {
  // Watches for RUN_TOKEN_SAGA actions and calls getToken when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RUN_TOKEN_SAGA, getToken)
}
