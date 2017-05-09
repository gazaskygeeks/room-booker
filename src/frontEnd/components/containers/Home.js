import {connect} from 'react-redux';
import Home from '../Home.jsx';
import {ChangeCurrentView,selectRoom,getUserBookings,getDayEvents}from '../../actions.js';

const mapStateToProps = (state)=>{
  return({
    rooms: state.rooms,
    userReservations:state.userReservations,
    userEmail: state.userInfo.email
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    selectRoom: (id,room)=>{dispatch(selectRoom(id,room));},
    getUserBookings: getUserBookings,
    getEvent: getDayEvents
  };
};

const HomeView= connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeView;
