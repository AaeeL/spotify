import React from 'react';
import Button from '@material-ui/core/Button';

const buttonStyle = {
  background: '#1db954',
  borderRadius: 10,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0px 0px 10px 2px #000000'
};

const linkStyle = {
  textDecoration: 'none'
};

const LoginButton = props => {
  return (
    <a style={linkStyle} href="http://localhost:5000/api/user/login">
      <Button style={buttonStyle}>Sign in</Button>
    </a>
  );
};

export default LoginButton;
