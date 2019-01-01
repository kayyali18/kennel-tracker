import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import H1 from '../H1'

describe('<H1 />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<H1 />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render an h1 tag', () => {
    const renderedComponent = renderer.create(<H1 />).toJSON()
    expect(renderedComponent.type).toEqual('h1')
  })
})
