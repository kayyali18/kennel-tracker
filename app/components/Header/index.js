import React from 'react'
import { FormattedMessage } from 'react-intl'

import Wrapper from './Wrapper'
import HeaderLink from './HeaderLink'
import messages from './messages'

function Header() {
  return (
    <Wrapper>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/booking">
        <FormattedMessage {...messages.newBooking} />
      </HeaderLink>
      <HeaderLink to="/calendar">
        <FormattedMessage {...messages.calendar} />
      </HeaderLink>
      <HeaderLink to="/profile">
        <FormattedMessage {...messages.search} />
      </HeaderLink>
    </Wrapper>
  )
}

export default Header
