import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from '../Button'

describe('<Button />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<Button />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a div', () => {
    const renderedComponent = renderer.create(<Button />).toJSON()
    expect(renderedComponent.type).toEqual('div')
  })
})
