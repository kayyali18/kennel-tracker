import { fromJS } from 'immutable'

import { selectHome, makeSelectRunInfo } from '../selectors'

describe('selectHome', () => {
  it('should select the global state', () => {
    const homeState = fromJS({})
    const mockedState = fromJS({
      home: homeState,
    })
    expect(selectHome(mockedState)).toEqual(homeState)
  })
})

describe('makeSelectRunInfo', () => {
  const currentUserSelector = makeSelectRunInfo()
  it('should select runInfo', () => {
    const runInfo = () => {}
    const mockedState = fromJS({
      home: {
        runInfo,
      },
    })
    expect(currentUserSelector(mockedState)).toEqual(runInfo)
  })
})
