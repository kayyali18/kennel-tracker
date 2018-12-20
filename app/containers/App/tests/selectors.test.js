import { fromJS } from 'immutable'

import {
  selectGlobal,
  selectRouter,
  makeSelectLoading,
  makeSelectError,
  makeSelectSearchQuery,
  makeSelectLocation,
  makeSelectData,
} from '../selectors'

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation()
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    })
    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    )
  })
})

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({})
    const mockedState = fromJS({
      global: globalState,
    })
    expect(selectGlobal(mockedState)).toEqual(globalState)
  })
})

describe('selectRouter', () => {
  it('should select the router state', () => {
    const routerState = fromJS({})
    const mockedState = fromJS({
      router: routerState,
    })
    expect(selectRouter(mockedState)).toEqual(routerState)
  })
})

describe('makeSelectLoading', () => {
  const currentUserSelector = makeSelectLoading()
  it('should select loading', () => {
    const loading = true
    const mockedState = fromJS({
      global: {
        loading,
      },
    })
    expect(currentUserSelector(mockedState)).toEqual(loading)
  })
})

describe('makeSelectError', () => {
  const errorSelector = makeSelectError()
  it('should select the error', () => {
    const error = 404
    const mockedState = fromJS({
      global: {
        error,
      },
    })
    expect(errorSelector(mockedState)).toEqual(error)
  })
})

describe('makeSelectSearchQuery', () => {
  const reposSelector = makeSelectSearchQuery()
  it('should select the repos', () => {
    const search = 'Dog'
    const mockedState = fromJS({
      global: {
        searchQuery: search,
      },
    })
    expect(reposSelector(mockedState)).toEqual(search)
  })
})

describe('makeSelectData', () => {
  const reposSelector = makeSelectData()
  it('should select the repos', () => {
    const dogData = ''
    const mockedState = fromJS({
      global: {
        dogData,
      },
    })
    expect(reposSelector(mockedState)).toEqual(dogData)
  })
})

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation()
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    })
    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    )
  })
})
