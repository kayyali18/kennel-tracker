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
    this.props.onSubmit({ ...this.state, stage: 2 })
  }

  render() {
    return (
      <ModalWrapper>
        <h1> Pet Info</h1>

        <form
          onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}
          className="ModalForm"
        >
          <Input
            handleChange={this.handleChange}
            id="petName"
            type="text"
            placeholder="Pet Name"
          />
          <Input
            handleChange={this.handleChange}
            id="breed"
            type="text"
            placeholder="Pet Breed"
          />
          <Input
            handleChange={this.handleChange}
            id="color"
            type="text"
            placeholder="Pet Color"
          />
          <Input
            handleChange={this.handleChange}
            id="DOB"
            type="date"
            data-placeholder="Date of Birth"
          />
          <select id="matingAbility" onChange={this.handleChange}>
            <option>-- Please Select an Option --</option>
            <option>Spayed</option>
            <option>Neutered</option>
            <option>None</option>
          </select>
          <Input
            handleChange={this.handleChange}
            id="medication"
            type="text"
            placeholder="Medications"
          />
          <Input
            handleChange={this.handleChange}
            id="feeding"
            type="text"
            placeholder="Feeding Instructions"
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
