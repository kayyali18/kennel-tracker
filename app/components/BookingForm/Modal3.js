import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import ModalWrapper from './ModalWrapper'

function Modal(props) {
  return (
    <ModalWrapper>
      <form onSubmit={props.onSubmit} className="ModalForm">
        <h1> Vet Info</h1>
        <Input id="vet-practice" type="text" placeholder="Practice Name" />
        <Input id="vet-name" type="text" placeholder="Vet's Name" />
        <Input id="vet-address" type="text" placeholder="Address" />
        <Input
          id="vet-phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone #"
        />
        <Input id="vet-email" type="email" placeholder="Email Address" />
        <Input id="vet-shots" type="text" placeholder="Shots due" />
        <button type="submit">
          Log in <i className="fa fa-fw fa-chevron-right" />
        </button>
      </form>
    </ModalWrapper>
  )
}

export default Modal

Modal.propTypes = {
  onSubmit: PropTypes.func,
}
