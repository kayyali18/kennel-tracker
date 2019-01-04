import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LoginBtn from '../LoginBtn'

describe('<LoginBtn />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<LoginBtn />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a button', () => {
    const renderedComponent = renderer.create(<LoginBtn />).toJSON()
    expect(renderedComponent.type).toEqual('input')
  })
})
