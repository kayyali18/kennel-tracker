import React from 'react'
import PropTypes from 'prop-types'

import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Wrapper from './Wrapper'

/* eslint-disable react */
function BookingForm(props) {
  let form1
  let form2
  let form3
  if (!props.mounted) {
    form1 = <Modal1 onSubmit={props.handleSubmit} />
    form2 = <Modal2 onSubmit={props.handleSubmit} />
    form3 = <Modal3 onSubmit={props.handleSubmit} />
  }

  if (props.stage == 1) return <Wrapper>{form1}</Wrapper>
  if (props.stage == 2) return <Wrapper>{form2}</Wrapper>
  if (props.stage == 3) return <Wrapper>{form3}</Wrapper>
  return <Wrapper>Thank You</Wrapper>
}

export default BookingForm

BookingForm.propTypes = {
  handleSubmit: PropTypes.func,
  mounted: PropTypes.bool,
  stage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
