import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import ModalWrapper from './ModalWrapper'

class Modal extends React.PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = () => {
    this.props.onSubmit({ ...this.state, stage: 3 })
  }

  render() {
    return (
      <ModalWrapper>
        <h1> Vet Info</h1>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}
          className="ModalForm"
        >
          <Input
            handleChange={this.handleChange}
            id="vet-practice"
            type="text"
            placeholder="Practice Name"
          />
          <Input
            handleChange={this.handleChange}
            id="vet-name"
            type="text"
            placeholder="Vet's Name"
          />
          <Input
            handleChange={this.handleChange}
            id="vet-address"
            type="text"
            placeholder="Address"
          />
          <Input
            handleChange={this.handleChange}
            id="vet-phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone #"
          />
          <Input
            handleChange={this.handleChange}
            id="vet-email"
            type="email"
            placeholder="Email Address"
          />
          <Input
            handleChange={this.handleChange}
            id="vet-shots"
            type="text"
            placeholder="Shots due"
          />
          <button type="submit">
            Log in <i className="fa fa-fw fa-chevron-right" />
          </button>
        </form>
      </ModalWrapper>
    )
  }
}

export default Modal

Modal.propTypes = {
  onSubmit: PropTypes.func,
}