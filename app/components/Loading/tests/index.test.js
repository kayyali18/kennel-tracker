import React from 'react'
import { shallow } from 'enzyme'

import LoadingDots from '../index'

it('should match snapshot', () => {
  const renderedComponent = shallow(<LoadingDots />)
  expect(renderedComponent).toMatchSnapshot()
})
