import React from 'react';
import {PropTypes} from 'prop-types';
import GoogleLogin from 'react-google-login';


const Login = (props)=>{

  const responseGoogle = (response) => {
    props.login({accessToken:response.Zi.access_token,
      firstName:response.profileObj.familyName,
      lastName:response.profileObj.givenName});

  };

  return(
    <GoogleLogin
      clientId="56152872441-s2auck70gdgickfjbph5d1nq88pvvjo6.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      style = {{
        width:'100%',
        height:'50px',
        fontSize: '18px'
      }}
      className='btn btn-primary'
    />);
};

Login.propTypes = {
  login: PropTypes.func
};

export default Login;
