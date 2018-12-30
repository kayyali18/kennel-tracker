import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  return (
    <div className="Input">
      <label>
        <input
          id={props.name}
          autoComplete="false"
          required
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  )
}

export default Input

Input.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
