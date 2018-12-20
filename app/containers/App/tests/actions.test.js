import * as Actions from '../actions'

describe('actions', () => {
  it('should have a type of LOAD_API', () => {
    const expected = {
      type: 'kennel-tracker/App/LOAD_API',
    }

    const result = Actions.loadApi()

    expect(result).toEqual(expected)
  })
  it('should have a type of LOAD_API_SUCCESS', () => {
    const expected = {
      type: 'kennel-tracker/App/LOAD_API_SUCCESS',
    }

    const result = Actions.apiLoaded()

    expect(result).toEqual(expected)
  })

  it('should have a type of LOAD_API_ERROR', () => {
    const expected = {
      type: 'kennel-tracker/App/LOAD_API_ERROR',
    }

    const result = Actions.apiLoadingError()

    expect(result).toEqual(expected)
  })
})
