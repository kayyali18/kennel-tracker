/* eslint-disable */

import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DogInfo from '../index'
import state from './mockData'

describe('<DogInfo />', () => {
  it.skip('should match snapshot', () => {
    const state = state
    const renderedComponent = shallow(<DogInfo state={state} />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
