import React from 'react';
import {validEmail} from '../actions.js';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
  }
  onSignIn(googleUser) {
    validEmail(googleUser.getBasicProfile());
  }
  renderGoogleLoginButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': this.onSignIn
    });
  }
  componentDidMount() {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton);
  }

  render() {
    let displayText = "Sign in with Google";
    return (
      <div id = "my-signin2" ></div>
    );
  }

}

module.exports = LoginButton;
