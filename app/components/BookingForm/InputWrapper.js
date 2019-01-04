import styled from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 1px solid rgba(#fffce8, 0.1);
  padding-bottom: 3px;
  margin-bottom: 5px;

  input {
    outline: none;
    border: 0;
    color: #fffce8;
    background: transparent;
    flex: 1 0 auto;
    font-weight: 300;
  }

  input[type='date']::before {
    content: attr(data-placeholder);
    color: #aaa;
    margin-right: 0.5em;
  }

  input[type='date']:focus:before,
  input[type='date']:valid:before {
    content: '';
  }

  label:focus {
    opacity: 1;
  }

  label {
    font-family: 'Font Awesome';
    font-size: 13px;
    opacity: 0.1;
    transition: opacity 0.5s ease;
  }

  label::before {
    align-items: center;
    color: #fffce8;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
  }
  @import url('https://fonts.googleapis.com/css?family=Quicksand');

  input {
    display: inline-block;
    width: 155px;
    margin: 0px;
    padding: 10px 0 10px 15px;
    line-height: 60px;
    font-family: 'Quicksand', sans-serif;
    font-size: 25px;
    text-indent: 30px;
    transition: all 0.3s ease-in-out;
  }

  input:focus,
  input:active {
    color: black;
    text-indent: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
      color: white;
    }
  }
`
export default InputWrapper
