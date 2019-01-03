import styled from 'styled-components'

const LoginBtn = styled.input.attrs({
  // we can define static props
  type: 'submit',
  'aria-label': 'Login',
  value: props => props.text || 'Submit',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em',
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

export default LoginBtn
