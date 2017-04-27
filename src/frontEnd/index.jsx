import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import {Provider} from 'react-redux';
import App from './components/containers/App.js';

const Main = () => {
  return (
    <Provider store={store}>
      <div className="container" id="main">
        <App/>
      </div>
    </Provider>
  );
};

reactDOM.render(
  <Main/>, document.getElementById('myApp'));
