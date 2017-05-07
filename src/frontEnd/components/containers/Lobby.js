import {connect} from 'react-redux';
import Lobby from '../Lobby.jsx';
import {ChangeCurrentView,getDayEvents,insertUser}from '../../actions.js';

const mapStateToProps = (state)=>{
  return({
    rooms: state.rooms
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    getEvent: ()=>{getDayEvents();},
    logIn: (data) =>{insertUser(data);},

  };
};

const LobbyView= connect(mapStateToProps,mapDispatchToProps)(Lobby);

export default LobbyView;
