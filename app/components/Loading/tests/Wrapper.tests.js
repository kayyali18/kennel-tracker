import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import DotWrapper from '../Wrapper'

describe('<DotWrapper />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<DotWrapper />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a div', () => {
    const renderedComponent = renderer.create(<DotWrapper />).toJSON()
    expect(renderedComponent.type).toEqual('div')
  })
})
