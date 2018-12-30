import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import Modal from './Modal'
import Wrapper from './Wrapper'

function BookingForm(props) {
  let child
  if (!props.mounted) {
    child = <Modal onSubmit={props.handleSubmit} />
  }

  return (
    <Wrapper>
      <CSSTransitionGroup
        transitionName="form"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {child}
      </CSSTransitionGroup>
    </Wrapper>
  )
}

export default BookingForm

BookingForm.propTypes = {
  handleSubmit: PropTypes.func,
  mounted: PropTypes.bool,
}
