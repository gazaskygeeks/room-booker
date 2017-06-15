import {connect} from 'react-redux';
import WeekView from '../WeekView.jsx';
import {createEvent,ChangeCurrentView,getDayEvents,formateEvents,clearEvents} from '../../actions.js';

const mapStateToProps = (state) => {
  return ({
    userInfo:state.userInfo,
    room:state.currentRoom,
    bookings:state.bookings,
    rooms:state.rooms
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: createEvent,
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    getEvent: getDayEvents,
    formateEvents: formateEvents,
    clearEvents: clearEvents


  };
};


const weekView = connect(mapStateToProps, mapDispatchToProps)(WeekView);

export default weekView;
