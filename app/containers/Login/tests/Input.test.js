import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Input from '../Input'

describe('<Input />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<Input />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render an input', () => {
    const renderedComponent = renderer.create(<Input />).toJSON()
    expect(renderedComponent.type).toEqual('input')
  })
})
