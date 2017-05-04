import {connect} from 'react-redux';
import Lobby from '../Lobby.jsx';
import {ChangeCurrentView,getDayEvents,insertUser}from '../../actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    getEvent: ()=>{getDayEvents();},
    logIn: (data) =>{insertUser(data);}
  };
};

const LobbyView= connect(null,mapDispatchToProps)(Lobby);

export default LobbyView;
