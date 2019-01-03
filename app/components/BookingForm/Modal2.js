import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import ModalWrapper from './ModalWrapper'

function Modal(props) {
  return (
    <ModalWrapper>
      <form onSubmit={props.onSubmit} className="ModalForm">
        <Input id="pet-name" type="text" placeholder="Pet Name" />
        <Input id="breed" type="text" placeholder="Pet Breed" />
        <Input id="color" type="text" placeholder="Pet Color" />
        <Input id="dob" type="date" data-placeholder="Date of Birth" />
        <select>
          <option>Spayed</option>
          <option>Neutered</option>
          <option>None</option>
        </select>
        <Input id="medication" type="text" placeholder="Medications" />
        <Input id="feeding" type="text" placeholder="Feeding Instructions" />

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
