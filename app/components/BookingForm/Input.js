import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from './InputWrapper'

function Input(props) {
  return (
    <InputWrapper>
      <input
        id={props.name}
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
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
