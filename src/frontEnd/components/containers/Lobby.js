import {connect} from 'react-redux';
import Lobby from '../Lobby.jsx';
import {ChangeCurrentView,getDayEvents,insertUser,selectRoom}from '../../actions.js';

const mapStateToProps = (state)=>{
  return({
    rooms: state.rooms,
    userInfo:state.userInfo
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    getEvent: getDayEvents,
    logIn: insertUser,
    selectRoom: (id,room)=>{dispatch(selectRoom(id,room));}

  };
};

const LobbyView= connect(mapStateToProps,mapDispatchToProps)(Lobby);

export default LobbyView;
