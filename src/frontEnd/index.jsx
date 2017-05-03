import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import {Provider} from 'react-redux';
import App from './components/containers/App.js';
import Navbar from './components/Navbar.jsx';
const Main = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className="container">
          <App/>
        </div>
      </div>
    </Provider>
  );
};

reactDOM.render(
  <Main/>, document.getElementById('myApp'));
