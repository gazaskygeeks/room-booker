import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import {Provider} from 'react-redux';
import App from './components/containers/App.js';

const Main = () => {
  return (
    <Provider store={store}>
      <div>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  Gaza Sky Geeks
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <p className="navbar-text">
                  <a href="/" className="navbar-link">Room Booking</a>
                </p>
                <p className="navbar-text navbar-right">Signed in as
                  <a href="#" className="navbar-link">Mark Otto</a>
                </p>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <App/>
        </div>
      </div>
    </Provider>
  );
};

reactDOM.render(
  <Main/>, document.getElementById('myApp'));
