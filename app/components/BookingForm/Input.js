import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from './InputWrapper'

function Input(props) {
  return (
    <InputWrapper>
      <label>
        <input
          id={props.name}
          autoComplete="false"
          required
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </InputWrapper>
  )
}

export default Input

Input.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
