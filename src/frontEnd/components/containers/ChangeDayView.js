import {connect} from 'react-redux';
import RoomAvailbility from '../RoomAvailability.jsx';

const mapStateToProps = (state)=>{
  return({
    bookings: state.bookings,
    room:state.currentView
  });
};

const ChangeDayView= connect(mapStateToProps,null)(RoomAvailbility);

export default ChangeDayView;
