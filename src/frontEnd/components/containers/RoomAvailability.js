import {connect} from 'react-redux';
import RoomAvailbility from '../RoomAvailability.jsx';
import {isLoggedIn, formateEvents}from '../../actions.js';

const mapStateToProps = (state)=>{
  return({
    bookings: state.bookings,
    room:state.currentRoom
  });
};

const mapDispatchToProps = () => {
  return {
    isLoggedIn: () =>{ isLoggedIn();},
    formateEvents:formateEvents
  };
};

const RoomAvailability= connect(mapStateToProps,mapDispatchToProps)(RoomAvailbility);

export default RoomAvailability;
