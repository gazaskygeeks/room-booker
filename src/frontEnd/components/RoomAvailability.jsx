import React from 'react';
import DayView from './DayView.jsx';
import {PropTypes} from 'prop-types';

const RoomAvailbility = ({bookings,room}) => {

  return (
    <div className="row justify-content-md-center">
      <h1>Room 1</h1>
      <div className="col-md-12">
        <DayView events={bookings} onload={() => {
          onload(room);
        }}/>
      </div>
    </div>
  );

};

RoomAvailbility.propTypes = {
  bookings: PropTypes.arr,
  room: PropTypes.string
};

export default RoomAvailbility;
