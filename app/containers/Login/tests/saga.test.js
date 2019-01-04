/**
 * Tests for LoginPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects'

import { RUN_TOKEN_SAGA } from '../constants'
import runTokenSaga, { getToken } from '../saga'
import { clearUserCredentials } from '../actions'

describe('getToken Saga', () => {
  let getTokenGenerator

  beforeAll(() => {
    getTokenGenerator = getToken()

    // describe the selector (makeSelectEmail)
    const selectDescriptor = getTokenGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()

    const selectDescriptor2 = getTokenGenerator.next().value
    expect(selectDescriptor2).toMatchSnapshot()
  })

  it('should dispatch the clearUserCredentials action', () => {
    const putDescriptor = getTokenGenerator.next().value
    expect(putDescriptor).toEqual(put(clearUserCredentials()))
  })
})

describe('runTokenSaga', () => {
  const runTokenSagaTest = runTokenSaga()

  it('should start a task to watch for RUN_TOKEN_SAGA', () => {
    const takeLatestDescriptor = runTokenSagaTest.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(RUN_TOKEN_SAGA, getToken))
  })
})
