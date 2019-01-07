import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import ModalWrapper from './ModalWrapper'

class Modal extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = () => {
    this.props.onSubmit({ ...this.state })
  }

  render() {
    return (
      <ModalWrapper>
        <h1> Owner Info</h1>

        <form
          onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}
          className="ModalForm"
        >
          <Input
            handleChange={this.handleChange}
            id="first_name"
            type="text"
            placeholder="First Name"
          />
          <Input
            handleChange={this.handleChange}
            id="last_name"
            type="text"
            placeholder="Last Name"
          />
          <Input
            handleChange={this.handleChange}
            id="address"
            type="text"
            placeholder="Address"
          />
          <Input
            handleChange={this.handleChange}
            id="cell_phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Cellphone"
          />
          <Input
            handleChange={this.handleChange}
            id="home_phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Emergency Contact #"
          />
          <Input
            handleChange={this.handleChange}
            id="email"
            type="email"
            placeholder="E-mail"
          />
          <button type="submit">
            Next <i className="fa fa-fw fa-chevron-right" />
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
