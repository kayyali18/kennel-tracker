import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from './InputWrapper'

function Input(props) {
  return (
    <InputWrapper>
      <input
        onChange={props.handleChange}
        id={props.id}
        autoComplete="true"
        required
        type={props.type}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  )
}

export default Input

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
