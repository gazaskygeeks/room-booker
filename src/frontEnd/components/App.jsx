import React from 'react';
import ChangeView from './containers/ChangeView.js';
import ChangeDayView from './containers/ChangeDayView.js';
import {PropTypes} from 'prop-types';

const App = ({currentView}) => {
  switch (currentView) {
  case 'ROOM_1':
    return <ChangeDayView room={currentView}/>;
  default:
    return <ChangeView/>;
  }
};

App.propTypes = {
  currentView : PropTypes.string.isRequired
};

export default App;
