import React from 'react'
// import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'
// import renderer from 'react-test-renderer'
// import { compose } from 'redux'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Login from '../index'

const mockStore = configureMockStore()

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
