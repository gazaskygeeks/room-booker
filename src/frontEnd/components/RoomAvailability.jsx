import React from 'react';
import DayView from './DayView.jsx';
import {PropTypes} from 'prop-types';

const RoomAvailbility = ({bookings}) => {

  return (
    <div className="row">
      <h1>Room 1</h1>
      <div className="col-md-12">
        <DayView events={bookings}/>
      </div>
    </div>
  );

};

RoomAvailbility.propTypes = {
  bookings: PropTypes.arr,
};

export default RoomAvailbility;
