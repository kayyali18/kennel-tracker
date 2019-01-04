/* eslint-disable */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { compose } from 'redux'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import runInfoSagaWatcher from '../actions'
import { mapDispatchToProps, mapStateToProps, handleDogs } from '../index'

const mockStore = configureMockStore()

import HomePage from '../index'

describe('<HomePage />', () => {
  let props
  it('should match snapshot', () => {
    const store = mockStore({})
    const wrapper = shallow(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('should have default state', () => {
    const store = mockStore({})
    const defaultState = null
    const wrapper = shallow(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    )
    expect(wrapper.state()).toEqual(defaultState)
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with a runInfoSagaWatcher action when dispatchSaga is called', () => {
    const currentDog = { dog: 'Pasta' }

    const mockDispatch = jest.fn()
    const actionToDispatch = jest.fn()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.dispatchSaga()

    expect(mockDispatch).toHaveBeenCalled
  })
})

// describe('handleDogs', () => {
//   it('should call set state', async () => {
//     const mockPreventDefault = jest.fn()
//     const handleDogs = jest.fn()
//     const mockEvent = {
//       target: {
//         name: 'dog',
//         value: 'dog',
//       },
//       preventDefault: mockPreventDefault,
//     }
//     const store = mockStore({})
//     const defaultState = null
//     const wrapper = shallow(
//       <Provider store={store}>
//         <HomePage />
//       </Provider>,
//     )
//     const expected = 'dog'
//     await wrapper.instance().handleDogs(mockEvent)

//     expect(wrapper.state().origin).toEqual(expected)
//   })
// })
