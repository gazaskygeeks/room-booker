import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import {Provider} from 'react-redux';
import App from './components/containers/App.js';

const Main = () => {
  return (
    <Provider store={store}>
      <div className="container" id="main">
        <div className="header">
          <h1>Room Booking</h1>
          <h3>Gaza Sky Geeks</h3>
        </div>
        <App/>
      </div>
    </Provider>
  );
};

reactDOM.render(
  <Main/>, document.getElementById('myApp'));
