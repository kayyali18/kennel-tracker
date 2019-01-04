/* eslint-disable */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { compose } from 'redux'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Div from '../Div'

const mockStore = configureMockStore()

import HomePage from '../index'
import messages from '../messages'

describe('<HomePage />', () => {
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
