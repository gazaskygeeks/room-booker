import React from 'react';
import reactDOM from 'react-dom';
import GoogleLogin from './components/GoogleLogin.jsx';
import Home from './components/Home.jsx';
import {container} from 'react-bootstrap';

const App = () => {
  return (
    <container id="main">
      <Home/>
      <GoogleLogin/>
    </container>
  );
};

reactDOM.render(
  <App/>, document.getElementById('myApp'));
