import styled from 'styled-components'

const Form1 = styled.section`
  background-image: url(https://unsplash.it/1400/799);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #3e363f;

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

  .form-enter {
    margin-top: 30px;
    opacity: 0.01;
  }
  .form-enter-active {
    margin-top: 0px;
    opacity: 1;
    transition: opacity 0.5s ease, margin 0.5s ease;
  }

  .form-leave {
    margin-top: 0px;
    opacity: 1;
  }
  .form-leave-active {
    margin-top: -30px;
    opacity: 0.01;
    transition: opacity 0.3s ease, margin 0.5s ease;
  }
`
export default Form1

// make them checkboxes so when checked they can move to the next
