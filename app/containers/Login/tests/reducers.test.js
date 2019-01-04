import { fromJS } from 'immutable'

import loginReducer from '../reducer'
import { submitUserCredentials } from '../actions'

describe('loginReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      user: { email: '', password: '' },
    })
  })
  it('should return the initial state', () => {
    const expectedResult = state
    expect(loginReducer(undefined, {})).toEqual(expectedResult)
  })
  it('should handle the submitUserCredentials action correctly', () => {
    const admin = fromJS({ email: undefined, password: undefined })
    const expectedResult = state.set('user', admin)

    expect(loginReducer(state, submitUserCredentials(admin))).toEqual(
      expectedResult,
    )
  })
  it.skip('should handle the clearUserCredentials action correctly', () => {
    const expectedResult = state.set('user', {})

    expect(loginReducer(state, submitUserCredentials())).toEqual(expectedResult)
  })
})
