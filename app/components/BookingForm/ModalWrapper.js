import styled from 'styled-components'

const ModalWrapper = styled.div`
  background: #2d171175;
  border-radius: 2px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  h1 {
  }

  .ModalForm {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2rem 5rem;
    align-items: space-around;
  }

  button {
    align-items: center;
    background: #dd403a;
    border: 0;
    border-radius: 3px;
    color: white;
    display: flex;

    font-family: 'Quicksand';
    font-size: 13px;
    font-weight: 500;
    justify-content: center;
    margin-top: 20px;
    outline: none;
    padding: 10px 9px 10px 11px;
    text-transform: uppercase;
    width: 100%;
    height: 80px;

    .fa {
      font-size: 12px;
      margin-left: auto;
      position: relative;
      top: 1px;
    }
  }

  button:hover {
    transform: scale(1.02);
  }

  button:active {
    transform: scale(0.99);
  }
`
export default ModalWrapper
