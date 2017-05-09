import React from 'react';
import DayView from './DayView.jsx';
import {PropTypes} from 'prop-types';

const RoomAvailbility = ({room,bookings}) => {
  return (
    <div className="row">
      <h1>{room.room_name}</h1>
      <div className="col-md-12">
        <DayView events={bookings}/>
      </div>
    </div>
  );

};

RoomAvailbility.propTypes = {
  bookings: PropTypes.array,
  room:PropTypes.string
};

export default RoomAvailbility;
