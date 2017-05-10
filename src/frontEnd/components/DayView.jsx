import React from 'react';
import {PropTypes} from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
const DayView = ({bookings, room, isLoggedIn}) => {
  return (
    <div className="calendar-container">
      <div className="row">
        <img onClick={()=>isLoggedIn()} className="col-md-1" src="images/back5.png" style={{cursor: 'pointer',width: '80px',height: '50px'}} />
        <h1 className="col-md-11">
          {room.room_name}
        </h1>
      </div>
      <BigCalendar
        events={bookings}
        views={['week', 'day']}
        defaultView='day'
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date()}
        min={new Date(0,0,0,8,0,0,0)}
        max={new Date(0,0,0,19,0,0,0)}
        onSelectEvent={event => alert(event.title)}/>
    </div>
  );
};



DayView.propTypes = {
  bookings: PropTypes.array,
  room:PropTypes.object,
  isLoggedIn: PropTypes.func
};

export default DayView;
