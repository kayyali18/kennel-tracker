import { fromJS } from 'immutable'

import appReducer from '../reducer'
import { loadApi, apiLoaded, apiLoadingError } from '../actions'

describe('appReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      dogData: false,
      searchQuery: '',
      user: {},
      authenticated: false,
    })
  })
  it('should return the initial state', () => {
    const expectedResult = state
    expect(appReducer(undefined, {})).toEqual(expectedResult)
  })
  it('should handle the loadApi action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('dogData', false)

    expect(appReducer(state, loadApi())).toEqual(expectedResult)
  })
  it('should handle the apiLoaded action correctly', () => {
    const results = 'Pasta'
    const expectedResult = state.set('loading', false).set('dogData', results)

    expect(appReducer(state, apiLoaded(results))).toEqual(expectedResult)
  })
  it('should handle the apiLoadingError action correctly', () => {
    const error = true
    const expectedResult = state.set('error', true).set('loading', false)

    expect(appReducer(state, apiLoadingError(error))).toEqual(expectedResult)
  })
})
