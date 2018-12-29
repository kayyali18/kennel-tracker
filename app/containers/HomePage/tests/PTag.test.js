import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import PTag from '../PTag'

describe('<PTag />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<PTag />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a p tag', () => {
    const renderedComponent = renderer.create(<PTag />).toJSON()
    expect(renderedComponent.type).toEqual('p')
  })
})
