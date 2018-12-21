import { fromJS } from 'immutable'

import homeReducer from '../reducer'
import { displayCurrDogs } from '../actions'

describe('homeReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      runInfo: false,
    })
  })
  it('should return the initial state', () => {
    const expectedResult = state
    expect(homeReducer(undefined, {})).toEqual(expectedResult)
  })
  it('should handle the displayCurrDogs action correctly', () => {
    const data = { owner: 'Laura' }
    const expectedResult = state.set('runInfo', data)

    expect(homeReducer(state, displayCurrDogs(data))).toEqual(expectedResult)
  })
})
