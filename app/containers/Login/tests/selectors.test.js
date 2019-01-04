import { fromJS } from 'immutable'

import { selectLogin, makeSelectEmail, makeSelectPassword } from '../selectors'

describe('selectLogin', () => {
  it('should select the global state', () => {
    const loginState = fromJS({})
    const mockedState = fromJS({
      login: loginState,
    })
    expect(selectLogin(mockedState)).toEqual(loginState)
  })
})

describe('makeSelectEmail', () => {
  const currentUserSelector = makeSelectEmail()
  it('should select email', () => {
    const email = ''
    const mockedState = fromJS({
      user: {
        email,
      },
    })
    expect(currentUserSelector(mockedState)).toEqual(email)
  })
})

describe('makeSelectPassword', () => {
  const currentUserSelector = makeSelectPassword()
  it('should select password', () => {
    const password = ''
    const mockedState = fromJS({
      user: {
        password,
      },
    })
    expect(currentUserSelector(mockedState)).toEqual(password)
  })
})
