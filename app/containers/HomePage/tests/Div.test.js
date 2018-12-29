import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Div from '../Div'

describe('<Div />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<Div />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a div', () => {
    const renderedComponent = renderer.create(<Div />).toJSON()
    expect(renderedComponent.type).toEqual('div')
  })
})
