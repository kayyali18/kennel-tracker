import styled from 'styled-components'

const Form1 = styled.section`
  color: #fff;

  max-height: 70vh;

  overflow: auto;

  input {
    border: 2px solid black;
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
