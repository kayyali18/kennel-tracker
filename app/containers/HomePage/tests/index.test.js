/* eslint-disable */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'
// import renderer from 'react-test-renderer'

import HomePage from '../index'
import messages from '../messages'

describe('<HomePage />', () => {
  it.skip('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />)
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true)
  })
  // it('should match snapshot', () => {
  //   const renderedComponent = renderer.create(<HomePage />).toJSON()
  //   expect(renderedComponent).toMatchSnapshot()
  // })
})
