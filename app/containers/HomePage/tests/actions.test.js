import * as Actions from '../actions'

describe('actions', () => {
  it('should have a type of DISPLAY_CURR_DOGS', () => {
    const expected = {
      type: 'kennel-tracker/Home/DISPLAY_CURR_DOGS',
    }

    const result = Actions.displayCurrDogs()

    expect(result).toEqual(expected)
  })
  it('should have a type of RUN_CURR_DOGS_SAGA', () => {
    const expected = {
      type: 'kennel-tracker/Home/RUN_CURR_DOGS_SAGA',
    }

    const result = Actions.runInfoSagaWatcher()

    expect(result).toEqual(expected)
  })
})
