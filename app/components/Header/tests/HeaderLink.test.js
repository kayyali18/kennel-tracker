import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeaderLink from '../HeaderLink'

describe('<HeaderLink />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = shallow(<HeaderLink />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
