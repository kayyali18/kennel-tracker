import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Login, { mapDispatchToProps } from '../index'

const mockStore = configureMockStore()

/* eslint-disable */
describe('<Login />', () => {
  it('should match snapshot', () => {
    const store = mockStore({})
    const wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should have default state', () => {
    const defaultState = null
    const store = mockStore({})
    const wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>,
    )
    expect(wrapper.state()).toEqual(defaultState)
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with a runTokenSagaWatcher action when dispatchSaga is called', () => {
    const mockDispatch = jest.fn()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.dispatchSaga()

    expect(mockDispatch).toHaveBeenCalled
  })

  it('calls dispatch with a submitUserCredentials action when dispatchUser is called', () => {
    const mockDispatch = jest.fn()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.dispatchUser()

    expect(mockDispatch).toHaveBeenCalled
  })

  it('calls dispatch with a loginError action when dispatchError is called', () => {
    const mockDispatch = jest.fn()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.dispatchError()

    expect(mockDispatch).toHaveBeenCalled
  })
})
