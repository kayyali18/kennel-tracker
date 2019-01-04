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
  display: inline-block;
  position: relative;
  outline: none;
  padding: 17px 40px;
  top: 0;
  font-size: 30px;
  font-family: "Open Sans", Helvetica;
  border-radius: 4px;
  border-bottom: 1px solid black;
  background: #0e0b12;
  color: #fff;
  text-indent: 0px;

  -webkit-transform: translateZ(0);
     -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
          transform: translateZ(0);
  
  -webkit-transition: all 0.2s ease;
     -moz-transition: all 0.2s ease;
      -ms-transition: all 0.2s ease;
          transition: all 0.2s ease;
}

&:hover {
  top: -10px;
  box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );
  
  -webkit-transform: rotateX(20deg);
     -moz-transform: rotateX(20deg);
      -ms-transform: rotateX(20deg);
          transform: rotateX(20deg);
}

&:active {
  color: black;
  top: 0px;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );
  background: white;
}

`

export default LoginBtn
