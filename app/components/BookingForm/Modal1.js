import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import ModalWrapper from './ModalWrapper'

function Modal(props) {
  return (
    <ModalWrapper>
      <form onSubmit={props.onSubmit} className="ModalForm">
        <Input id="name" type="text" placeholder="Name" />
        <Input id="address" type="text" placeholder="Address" />
        <Input id="home-phone" type="tel" placeholder="Home Telephone" />
        <Input
          id="cell-phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Cell Telephone"
        />
        <Input id="email" type="email" placeholder="E-mail" />
        <Input id="e-phone" type="tel" placeholder="Emergency Contact #" />
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
