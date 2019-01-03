import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  color: #e7b7d3;
  border: none;
  position: relative;
  height: 35px;
  font-size: 1.6em;
  margin: 15px;

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
    background: #a85184;
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
    color: #a85184;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    text-decoration: none;
    transition: 800ms ease all;
  }
`
