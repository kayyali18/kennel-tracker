import styled from 'styled-components'

const Form1 = styled.section`
  background-image: url(https://images.unsplash.com/photo-1521570462976-79468098ea83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #3e363f;

  min-height: 80vh;

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
