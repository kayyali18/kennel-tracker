import styled from 'styled-components'

const Form1 = styled.section`
  display: grid;
  grid-gap: 4rem;
  grid-template-areas: 'input .';
  height: 80vh;

  position: absolute;
  overflow: auto;
  width: 100%;
  input {
    border: 2px solid black;
    position: relative;
    height: 50px;
  }

  input:nth-child(odd) {
    top: 2rem;
    left: 4rem;
  }
  input:nth-child(even) {
    top: 6rem;
    right: 4rem;
  }
`
export default Form1

// make them checkboxes so when checked they can move to the next
