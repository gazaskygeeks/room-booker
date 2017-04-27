import {connect} from 'react-redux';
import RoomAvailbility from '../RoomAvailability.jsx';

const mapStateToProps = (state)=>{
  return({
    bookings: state.bookings,
    room:state.currentView
  });
};

// const mapDispatchToProps=(dispatch)=>{
//   return{
//     onload:(room)=>{dispatch(getDayEvents(room));}
//   };
// };

const ChangeDayView= connect(mapStateToProps,null)(RoomAvailbility);

export default ChangeDayView;
