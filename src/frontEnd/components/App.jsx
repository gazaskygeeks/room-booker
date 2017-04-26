import React from 'react';
import ChangeView from './containers/ChangeView.js';
import RoomAvailbility from './RoomAvailability.jsx';
import {PropTypes} from 'prop-types';

const App = ({currentView}) => {
  switch (currentView) {
  case 'ROOM_1':
    return <RoomAvailbility room={currentView}/>;
  default:
    return <ChangeView/>;
  }
};

App.propTypes = {
  currentView : PropTypes.string.isRequired
};

export default App;
