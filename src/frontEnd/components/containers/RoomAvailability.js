import {connect} from 'react-redux';
import RoomAvailbility from '../RoomAvailability.jsx';
import {ChangeCurrentView}from '../../actions.js';

const mapStateToProps = (state)=>{
  return({
    bookings: state.bookings,
    room:state.currentRoom
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));}
  };
};

const RoomAvailability= connect(mapStateToProps,mapDispatchToProps)(RoomAvailbility);

export default RoomAvailability;
