import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Dot from '../Dot'

describe('<Dot />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<Dot />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a div', () => {
    const renderedComponent = renderer.create(<Dot />).toJSON()
    expect(renderedComponent.type).toEqual('div')
  })
})
