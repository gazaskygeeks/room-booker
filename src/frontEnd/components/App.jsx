import React from 'react';
import Lobby from './containers/Lobby.js';
import RoomAvailability from './containers/RoomAvailability.js';
import {PropTypes} from 'prop-types';
import Home from './containers/Home.js';
import Spinner from './Spinner.jsx';
import MonthView from './MonthView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.getRooms();
  }

  componentDidMount(){
    this.props.isLoggedIn();
  }

  render(){
    switch (this.props.currentView) {
    case 'ROOM_AVAILABILITY':
      return <RoomAvailability />;
    case 'HOME':
      return <Home/>;
    case 'LOBBY':
      return <Lobby/>;
    case 'SPINNER':
      return <Spinner/>;
    case 'MONTH_VIEW':
      return <MonthView />;
    }
  }
}

App.propTypes = {
  currentView: PropTypes.string.isRequired,
  userInfo: PropTypes.object,
  onClick: PropTypes.func,
  isLoggedIn: PropTypes.func,
  getRooms : PropTypes.func
};

export default App;
