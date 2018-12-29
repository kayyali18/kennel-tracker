import styled from 'styled-components'

const Button = styled.div`
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  color: grey;
  border: none;
  position: relative;
  height: 35px;
  width: 500px;
  font-size: 1.6em;
  padding: 0 0.5em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;

  &:before,
  &:after {
    content: '';
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: grey;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    text-decoration: none;
    left: 0;
    bottom: 0;
  }
  &:hover {
    text-decoration: none;
    color: grey;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    text-decoration: none;
    transition: 800ms ease all;
  }
`
export default Button
