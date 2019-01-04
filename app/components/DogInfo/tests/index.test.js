/* eslint-disable */

import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DogInfo from '../index'
import { mockState } from './mockData'

describe.skip('<DogInfo />', () => {
  it('should match snapshot', () => {
    console.log(mockState)
    const renderedComponent = shallow(<DogInfo state={mockState} />)
    expect(renderedComponent).toMatchSnapshot()
  })
  it('should exist', () => {
    const renderedComponent = shallow(<DogInfo state={mockState} />)
    expect(renderedComponent).toExist()
  })
})

