import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Form from '../Form'

describe('<Form />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<Form />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render a form', () => {
    const renderedComponent = renderer.create(<Form />).toJSON()
    expect(renderedComponent.type).toEqual('form')
  })
})
