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
            id="name"
            type="text"
            placeholder="Pet Name"
          />
          <Input
            handleChange={this.handleChange}
            id="species"
            type="text"
            placeholder="Species"
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
            id="dob"
            type="date"
            data-placeholder="Date of Birth"
          />
          <select id="spayed_neutered" required onChange={this.handleChange}>
            <option value="">-- Please Select an Option --</option>
            <option value>Spayed/Neutered</option>
            <option value={false}>N/A</option>
          </select>
          <Input
            handleChange={this.handleChange}
            id="medications"
            type="text"
            placeholder="Medications"
          />
          <Input
            handleChange={this.handleChange}
            id="feeding_instructions"
            type="text"
            placeholder="Feeding Instructions"
          />
          <Input
            handleChange={this.handleChange}
            id="shots"
            type="text"
            placeholder="Shots"
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
