import React from 'react';
import Home from './containers/Lobby.js';
import ChangeDayView from './containers/ChangeDayView.js';
import {PropTypes} from 'prop-types';
import Tabs from './Tabs.jsx';
import Spinner from './Spinner.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn:props.isLoggedIn
    };
  }

  componentDidMount(){
    this.state.isLoggedIn();
  }

  render(){

    switch (this.props.currentView) {
    case 'ROOM_1_AVAILABILITY':
      return <ChangeDayView room={this.props.currentView}/>;
    case 'ROOM_2_AVAILABILITY':
      return <ChangeDayView room={this.props.currentView}/>;
    case 'ROOM_3_AVAILABILITY':
      return <ChangeDayView room={this.props.currentView}/>;
    case 'ROOM_4_AVAILABILITY':
      return <ChangeDayView room={this.props.currentView}/>;
    case 'HOME':
      return <Tabs/>;
    case 'LOBBY':
      return <Home/>;
    case 'SPINNER':
      return <Spinner/>;
    }
  }
}


App.propTypes = {
  currentView: PropTypes.string.isRequired,
  userInfo: PropTypes.object,
  onClick: PropTypes.func,
  isLoggedIn: PropTypes.func
};


export default App;
