/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects'

import { apiLoaded, apiLoadingError } from 'containers/App/actions'
import { RUN_CURR_DOGS_SAGA } from '../constants'
import runInfoSaga, { getRunInfo } from '../saga'
import { displayCurrDogs } from '../actions'

/* eslint-disable redux-saga/yield-effects prettier-ignore */
describe('runInfoSaga', () => {
  let runInfoGenerator

  beforeAll(() => {
    runInfoGenerator = getRunInfo()

    const callDescriptor = runInfoGenerator.next('url', {}).value
    expect(callDescriptor).toMatchSnapshot()
  })

  it('should dispatch the displayCurrDogs action if it requests the data succesfully', () => {
    const response = {
      data: [
        {
          id: '4',
          type: 'reservation',
        },
      ],
    }

    const putDescriptor = runInfoGenerator.next(response).value
    expect(putDescriptor).toEqual(put(displayCurrDogs(response)))
  })

  it('should dispatch the apiLoaded action if it requests the data succesfully', () => {
    const response = {
      data: [
        {
          id: '4',
          type: 'reservation',
        },
      ],
    }

    const putDescriptor = runInfoGenerator.next(response).value
    expect(putDescriptor).toEqual(put(apiLoaded(response)))
  })

  it('should call the apiLoadingError action if the response errors', () => {
    const response = new Error('Some error')
    const putDescriptor = runInfoGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(apiLoadingError(response)))
  })
})

describe('runInfoSaga', () => {
  const runInfoSagaTest = runInfoSaga()

  it('should start a task to watch for RUN_CURR_DOGS_SAGA', () => {
    const takeLatestDescriptor = runInfoSagaTest.next().value
    expect(takeLatestDescriptor).toEqual(
      takeLatest(RUN_CURR_DOGS_SAGA, getRunInfo),
    )
  })
})
