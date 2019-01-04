import * as Actions from '../actions'

describe('actions', () => {
  it('should have a type of UPDATE_TOKEN', () => {
    const token = 'kjsdkjhaskjdskhaskjhasd'
    const expected = {
      type: 'kennel-tracker/Home/UPDATE_TOKEN',
      response: token,
    }

    const result = Actions.updateToken(token)

    expect(result).toEqual(expected)
  })
  it('should have a type of RUN_TOKEN_SAGA', () => {
    const expected = {
      type: 'kennel-tracker/Home/RUN_TOKEN_SAGA',
    }
    const result = Actions.runTokenSagaWatcher()

    expect(result).toEqual(expected)
  })
  it('should have a type of SUBMIT_USER_CREDS', () => {
    const admin = { email: 'lkshamus@gmail.com', password: '1234' }
    const expected = {
      type: 'kennel-tracker/Home/SUBMIT_USER_CREDS',
      user: admin,
    }
    const result = Actions.submitUserCredentials(admin)

    expect(result).toEqual(expected)
  })
  it('should have a type of CLEAR_USER_CREDS', () => {
    const expected = {
      type: 'kennel-tracker/Home/CLEAR_USER_CREDS',
    }
    const result = Actions.clearUserCredentials()

    expect(result).toEqual(expected)
  })
})
