import React from 'react'
import renderer from 'react-test-renderer'

import BookingForm from '../index'

describe('<BookingForm />', () => {
  it('should match snapshot', () => {
    const renderedComponent = renderer.create(<BookingForm />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })
})
