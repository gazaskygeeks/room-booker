import React from 'react';
import reactDOM from 'react-dom';
import {container} from 'react-bootstrap';
import store from './store.js';
import {Provider} from 'react-redux';
import App from './components/containers/App.js';

const Main = () => {
  return (
        <Provider store={store} >
            <container id="main">
                <App/>
            </container>
        </Provider>
  );
};

reactDOM.render(
    <Main/>, document.getElementById('myApp'));
