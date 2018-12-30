import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'

function Modal(props) {
  return (
    <div className="Modal">
      <form onSubmit={props.onSubmit} className="ModalForm">
        <Input id="name" type="text" placeholder="John Johnson" />
        <Input
          id="username"
          type="email"
          placeholder="JohnsonAndJohnson@gmail.com"
        />
        <Input id="password" type="password" placeholder="password" />
        <button type="submit">
          Log in <i className="fa fa-fw fa-chevron-right" />
        </button>
      </form>
    </div>
  )
}

export default Modal

Modal.propTypes = {
  onSubmit: PropTypes.func,
}
