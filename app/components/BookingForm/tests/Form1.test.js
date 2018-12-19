import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Form1 from '../Form1'

describe('<Form1 />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<Form1 />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a form', () => {
    const renderedComponent = renderer.create(<Form1 />).toJSON()
    expect(renderedComponent.type).toEqual('form')
  })
})
