import React from 'react';
import DayView from './DayView.jsx';
import {PropTypes} from 'prop-types';

const RoomAvailbility = ({bookings,room,isLoggedIn}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <DayView bookings={bookings} room={room} isLoggedIn={isLoggedIn}/>
      </div>
    </div>
  );
};

RoomAvailbility.propTypes = {
  bookings: PropTypes.array,
  room:PropTypes.object,
  isLoggedIn: PropTypes.func
};

export default RoomAvailbility;
