import React from 'react';
import DayView from './DayView.jsx';
import {PropTypes} from 'prop-types';

const RoomAvailbility = ({bookings,room,onClick}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <DayView bookings={bookings} room={room} onClick={onClick}/>
      </div>
    </div>
  );
};

RoomAvailbility.propTypes = {
  bookings: PropTypes.array,
  room:PropTypes.object,
  onClick: PropTypes.func
};

export default RoomAvailbility;
